const {nextISSTimesForMyLocation} = require('./iss');

const printPassTimes = passTimes => {
  for (const timeInfo of passTimes) {
    const dateAndTime = new Date(timeInfo.risetime * 1000).toLocaleString('en-US', {timeZone: 'America/New_York'});
    console.log(`Next pass at ${dateAndTime} for ${timeInfo.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(`Couldn't get ISS times for my location.`, error);
    return;
  }

  printPassTimes(passTimes);
});