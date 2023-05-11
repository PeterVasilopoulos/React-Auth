const mongoose = require("mongoose");
// rating, season, imageUrl
const DestinationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: [true, "Location is required"],
        minlength: [2, "Location must be at least 2 characters long"]
    },
    rating :{
        type: Number,
        required: [true, "Rating is required"],
        min : [1, "Rating must be between 1 and 10"],
        max : [10, "Rating must be between 1 and 10"]
    },
    imageUrl:{
        type: String,
    },
    season : {
        type: String,
        required: [true, "Season is required"]
    }

}, {timestamps : true}) // createdAt & updatedAt

// option 1
// module.exports = mongoose.model('Destination', DestinationSchema);

// option 2
module.exports.Destination = mongoose.model('Destination', DestinationSchema);