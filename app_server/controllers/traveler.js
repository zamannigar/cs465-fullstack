// JavaScript source code
const fs = require('fs');
const path = require('path');

const tripsPath = path.join(__dirname, '../../data/trips.json');

const travel = (req, res) => {
    const trips = JSON.parse(
        fs.readFileSync(tripsPath, 'utf8')
    );

    res.render('travel', {
        title: 'Travlr Getaways',
        trips: trips
    });
};

module.exports = {
    travel
};