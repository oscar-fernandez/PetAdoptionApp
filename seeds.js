const mongoose = require("mongoose"),
	  Animal   = require("./models/animal");

var data = [
	{
		name: "Grouch",
		image: "https://cdn.pixabay.com/photo/2016/02/19/11/53/pug-1210025__340.jpg",
		sex: "male",
		age: "10",
		breed: "Pug",
		weight: "14",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		name: "Rusty",
		image: "https://cdn.pixabay.com/photo/2019/10/21/11/29/siberian-husky-4565849__340.jpg",
		sex: "male",
		age: "4",
		breed: "Husky",
		weight: "65",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		name: "Maddy",
		image: "https://cdn.pixabay.com/photo/2015/03/26/01/55/dog-689684__340.jpg",
		sex: "female",
		age: "1",
		breed: "Rhodesian Ridgeback/Mix",
		weight: "43",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		name: "Luna",
		image: "https://cdn.pixabay.com/photo/2017/07/19/11/29/dog-2518846__340.jpg",
		sex: "female",
		age: "6",
		breed: "Pit Bull/Mix",
		weight: "50",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}
]

function seedDB(){
	Animal.deleteMany({}, (err)=>{
		if(err){
			console.log(err);
		}
		data.forEach((seed)=>{
			Animal.create(seed, (err, animal)=>{
				if(err){
					console.log(err);
				}else{
					console.log("added animal");
				}
			});
		});
	});
}

module.exports = seedDB;