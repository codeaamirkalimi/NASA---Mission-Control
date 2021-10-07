const planets = require("../models/planetModel");

function getAllPlanets(req, res) {
    return res.json(planets);
}

module.exports = {
    getAllPlanets
};