const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


const travelList = (req, res) => {
  res.render('travel', { 
    title: 'Travel Destinations',
    trips: trips 
  });
};

module.exports = {
  travelList
};
