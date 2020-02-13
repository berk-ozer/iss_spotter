const request = require('request-promise-native');

//makes API call to fetch IP address, returns a promise
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

module.exports = {fetchMyIP};