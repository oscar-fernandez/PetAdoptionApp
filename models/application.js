const mongoose = require("mongoose");

//shema set up
const  applicationSchema = new mongoose.Schema({
	animalName: String,
	appName: String,
	email: String,
	phone: String,
	home: String,
	address: String,
	about: String
});

//compile schema into model and export
module.exports = mongoose.model("Application", applicationSchema);