const {fetchMyIP} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('Couldn\'t get IP. Error:', error);
    return;
  }

  console.log('Got your IP! It is:', ip);
});