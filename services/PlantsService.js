'use strict';
var Plant = require('../models/plant');
var config = require('../config');

module.exports = {
    getAllPlants: function () {
        const plants = Plant.find({}, function (err, plants) {
            if (!err) {
                return plants;
            }
        });
        return plants;
    },
    getPlant: function (plantID) {
        const plant = Plant.find({ plantID: plantID }, function (err, plant) {
            if (!err) {
                return plant;
            }
        });
        return plant;
    },
    newPlant: function (newPlant) {
        const plantRec = new Plant(newPlant);
        plantRec.save(function (err, plant) {
            if (!err) {
                plantRec._id = plant._id;
            }
        });
        return plantRec;
    }
}