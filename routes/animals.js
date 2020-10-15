const express    = require("express"),
	  Animal     = require("../models/animal"),
	  middleware = require("../middleware"),
	  router     = express.Router();

//view all animals
router.get("/animals", (req, res)=>{
	//get all animals from mongodb
	Animal.find({},(err, animals)=>{
		if(err){
			console.log(err);
		}else{
			res.render("animals/index", {animals: animals});
		}
	});
});

//post new animal
router.post("/animals", middleware.isLoggedIn, (req, res)=>{
	Animal.create(
	{
		name: req.body.name, 
		image: req.body.image,
		sex: req.body.sex,
		age: req.body.age,
		breed: req.body.breed,
		weight: req.body.weight,
		description: req.body.description
	}, (err, animal)=>{
		if(err){
			console.log(err);
		}else{
			//redirect to animals page
			res.redirect("/animals");
		}
	});
});

//form used to collect new animal data
router.get("/animals/new", middleware.isLoggedIn, (req, res)=>{
	res.render("animals/new");
});

//SHOW - shows detail about individual animal
router.get("/animals/:id", (req, res)=>{
	Animal.findById(req.params.id, (err, foundAnimal)=>{
		if(err){
			console.log(err);
		}else{
			res.render("animals/show", {animal: foundAnimal});
		}
	});
});

//EDIT
router.get("/animals/:id/edit", (req, res)=>{
	Animal.findById(req.params.id, (err, foundAnimal)=>{
		if(err){
			res.redirect("/animals");
		}else{
			res.render("animals/edit", {animal: foundAnimal});
		}
	});
});

//UPDATE
router.put("/animals/:id", (req, res)=>{
	Animal.findByIdAndUpdate(req.params.id, req.body.animal, (err, foundAnimal)=>{
		if(err){
			console.log(err);
			res.redirect("/animals");
		}else{
			res.redirect("/animals/" + req.params.id);
		}
	});
});

router.delete("/animals/:id", (req, res)=>{
	Animal.findByIdAndRemove(req.params.id, (err)=>{
		if(err){
			console.log(err);
			res.redirect("/animals");
		}else{
			console.log("Animal deleted")
			res.redirect("/animals");
		}
	});
});

module.exports = router;