const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");
var moment = require("moment"); // formatting dates in ejs
var bcrypt = require("bcrypt");

module.exports = {
    create: (req, res) => {
        var pet = new Pet({
            name: req.body.name,
            pet_type: req.body.pet_type,
            description: req.body.description,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3,
            likes: 0,
        });
        pet.save(err => {
            if (err){
                console.log("CREATING FAILED!");
                let message = {"message": "error occured"};
                for (var key in err.errors){
                    message[key] = err.errors[key].message;
                }
                console.log(message);
                res.json(message);
            }else{
                console.log("CREATION SUCCESS!");
                res.json(pet)
            }
        });
    },

    findPet: (req, res) => {
        Pet.findOne({ name: req.params.name }, (err, pet) => {
            if (err){
                console.log("FINDING PET FAILED");
                res.json(pet);
            }else{
                console.log("FINDPET SUCCESS!")
                res.json(pet);
            }
        })
    },

    getAllPets: (req, res) => {
        Pet.find({}, (err, pets) => {
            if (err){
                console.log("GETALLPETS FAILED!")
                let message = {"message": "error occured"};
                for (var key in err.errors){
                    message[key] = err.errors[key].message;
                }
                console.log(message);
                res.json(message);
            }else{
                res.json(pets);
            }
        })
    },

    getPetInfo: (req, res) => {
        Pet.findById(req.params.id, (err, pet) => {
            if (err){
                console.log("getPet RETRIEVING FAILED!", err);
                res.json(pet);
            }else{
                console.log("GETPETINFO SUCCESS!");
                res.json(pet);
            }
        });
    },

    likePet: (req, res) => {
        Pet.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}}, (err, pet) => {
            if (err){
                console.log("LIKEPET FAILED!");
                let message = {"message": "error occured"};
                for (var key in err.errors){
                    message[key] = err.errors[key].message;
                }
                res.json(message);
            }else{
                console.log("LIKEPET SUCCESS!");
                res.json(pet);
            }
        });
    },

    updatePet: (req, res) => {
        Pet.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                pet_type: req.body.pet_type,
                description: req.body.description,
                skill1: req.body.skill1,
                skill2: req.body.skill2,
                skill3: req.body.skill3,
            }, {runValidators: true}, (err, pet) => {
            if (err){
                console.log("UPDATEPET FAILED!");
                let message = {"message": "error occured"};
                for (var key in err.errors){
                    message[key] = err.errors[key].message;
                }
                res.json(message);
            }else{
                console.log("UPDATEPET SUCCESS!");
                res.json(pet);
            }
        });
    },

    deletePet: (req, res) =>{
        Pet.findByIdAndDelete(req.params.id, (err, pet) => {
            if (err){
                console.log("DELETE FAILED!");
                res.json(pet);
            }else{
                res.json(pet);
            }
        })
    },

}