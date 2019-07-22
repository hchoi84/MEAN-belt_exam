const pet = require("../controllers/pets.js");

module.exports = app => {
    app.post("/pets", (req, res) => { pet.create(req, res); })
    app.get("/pets", (req, res) => { pet.getAllPets(req, res); })
    app.get("/pets/:name", (req, res) => { pet.findPet(req, res); })
    app.get("/pets/find/:id", (req, res) => { pet.getPetInfo(req, res); })
    app.put("/pets/like/:id", (req, res) => { pet.likePet(req, res); })
    app.put("/pets/update/:id", (req, res) => { pet.updatePet(req, res); })
    app.delete("/pets/delete/:id", (req, res) => { pet.deletePet(req, res); })
}