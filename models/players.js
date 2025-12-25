const mongoose = require('mongoose');

const play = mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    nation:{
        type:String
    },
    countryshort:{
        type:String
    },
    country:{
        type:String
    },
    points:{
        type:Number
    },
    baseprice:{
        type:Number
    },
    image:{
        type:String
    }
});

module.exports = mongoose.model("player",play);