const request = require('request');

const fetchMyIP = callback => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
    } else {
      callback(null, JSON.parse(body).ip);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`), null);
    } else {
      const { latitude, longitude } = JSON.parse(body).data;
      callback(null, { latitude, longitude });
    }
  });
};

module.exports = {fetchMyIP, fetchCoordsByIP};