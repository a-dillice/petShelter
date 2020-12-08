const mongoose = require("mongoose");

// setup model
const PetSchema = new mongoose.Schema({

    // setup name
    name:{
        type:String,
        required:[true, "The pet's name is required."],
        minlength:[3, "The pet's name requires at least 3 characters."],
        trim:true
    },
    type:{
        type:String,
        required:[true, "The pet's type is required."],
        minlength:[3, "The pet's type requires at least 3 characters."],
        trim:true
    },
    description:{
        type:String,
        required:[true, "The pet's description is required."],
        minlength:[3, "The pet's description requires at least 3 characters."],
        trim:true
    },
    skill1:{
        type:String,
        trim:true
    },
    skill2:{
        type:String,
        trim:true
    },
    skill3:{
        type:String,
        trim:true
    }

// auto timestamp
},{timestamp:true});

// set and export model
const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;
