const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    boarding: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },


    ticketsavailable:
    {
        type: Number,
        required: true
    },
    flightnumber:
    {
        type: Number,
        required: true
    }
}, { timestamps: true });

const flight = mongoose.model('flight', flightSchema);
const flig = new flight({
    boarding: 'Private Full-Day Tour Visiting Giza Pyramids',
    flightnumber: 1001,
    duration: 5,
    price: 550,
    ticketsavailable: 4,
    image: 'https://www.photobox.co.uk/my/photo/full?photo_id=505516152806'
});
flig.save();


module.exports = flight;

