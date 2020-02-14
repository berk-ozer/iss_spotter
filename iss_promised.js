const request = require('request-promise-native');

//makes API call to fetch IP address, returns a promise
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

// makes API call to fetch coordinates using IP address, returns a promise
const fetchCoordsByIP = (jsonStr) => {
  const ip = JSON.parse(jsonStr).ip;
  return request(`https://ipvigilante.com/${ip}`);
};

// makes API call to fetch fly over times using coordinates, returns a promise
const fetchISSFlyOverTimes = (jsonStr) => {
  const { latitude, longitude } = JSON.parse(jsonStr).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`)
};

module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};