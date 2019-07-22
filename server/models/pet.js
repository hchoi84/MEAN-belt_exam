var mongoose = require("mongoose");
var validate = require("mongoose-validator"); // mongoose validator via validate.js

var stringValidator = [
    validate({
        validator: "isLength",
        arguments: [3, 50],
        message: "Name should be between {ARGS[0]} and {ARGS[1]} characters",
    }),
]

const PetSchema = new mongoose.Schema({
    name: {
        required: [true, "Name is required"],
        type: String,
        validate: stringValidator,
    },
    pet_type: {
        required: [true, "Pet Type is required"],
        type: String,
        validate: stringValidator,
    },
    description: {
        required: [true, "Description is required"],
        type: String,
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    likes: {
        type: Number,
    },
    
}, { timestamps: true});
// automatically creates "createdAt" & "updatedAt" with ISODate value
// will auto update "updatedAt"

mongoose.model("Pet", PetSchema);