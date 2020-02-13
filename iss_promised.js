const request = require('request-promise-native');

//makes API call to fetch IP address, returns a promise
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

// makes API call to fetch coordinates using IP address, returns a promise
const fetchCoordsByIP = (jsonStr) => {
  const ip = JSON.parse(jsonStr).ip;
  return request(`https://ipvigilante.com/${ip}`);
}

module.exports = {fetchMyIP, fetchCoordsByIP};