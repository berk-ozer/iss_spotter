const {fetchMyIP} = require('./iss_promised');

fetchMyIP()
  .then(ip => console.log(ip));