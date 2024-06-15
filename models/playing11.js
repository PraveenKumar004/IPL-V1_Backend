const mongoose = require('mongoose');

const play = mongoose.Schema({
    mid:{
        type:String
    },
    pid:{
        type:String
    },
    teamName:{
        type:String
    },
    teamAbbrevation:{
        type:String
    },
    captain:{
        type:String
    },
    vicecaptain:{
        type:String
    },
    totalpoints:{
        type:String
    }, 
});

module.exports = mongoose.model("playing11",play);