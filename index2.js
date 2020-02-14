const {nextISSTimesForMyLocation} = require('./iss_promised');

// neatly prints the pass times to console
const printPassTimes = passTimes => {
  for (const timeInfo of passTimes) {
    const dateAndTime = new Date(timeInfo.risetime * 1000).toLocaleString('en-US', {timeZone: 'America/New_York'});
    console.log(`Next pass at ${dateAndTime} for ${timeInfo.duration} seconds!`);
  }
};

// invoking the main functionality
nextISSTimesForMyLocation()
  .then(passTimes => {
    printPassTimes(passTimes);
  })
  .catch(error => {
    console.log('Could not get ISS fly over times.\n' + error);
  })