const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss_promised');

// invoking the main functionality
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(times => console.log(times));