const mongoose = require('mongoose');

const admin = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model("admin",admin);