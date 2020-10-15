const mongoose = require("mongoose");

//shema set up
const animalSchema = new mongoose.Schema({
	name: String,
	image: String,
	sex: String,
	age: String,
	breed: String,
	weight: String,
	description: String
});

//compile schema into model and export
module.exports = mongoose.model("Animal", animalSchema);