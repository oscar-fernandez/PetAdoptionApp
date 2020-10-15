const express = require("express"),
	  router  = express.Router(),
	  middleware = require("../middleware"),
	  Application = require("../models/application");

router.get("/candidates", middleware.isLoggedIn, (req, res)=>{
	Application.find({}, (err, applications)=>{
		if(err){
			console.log(err);
		}else{
			console.log(req.params)
			res.render("candidates", {applications: applications})
		}
	});
});

router.post("/candidates", (req, res)=>{
	Application.create(
	{
		animalName: req.body.animalName,
		appName: req.body.firstName + ' ' + req.body.lastName,
		email: req.body.email,
		phone: req.body.phone,
		home: req.body.home,
		address: req.body.address,
		about: req.body.aboutYou
	}, (err, application)=>{
		if(err){
			console.log(err);
		}else{
			console.log(application);
			res.redirect("/animals");
		}
	});
});

router.delete("/candidates/:id", middleware.isLoggedIn, (req, res)=>{
	Application.findByIdAndRemove(req.params.id, (err)=>{
		if(err){
			console.log(err);
			res.redirect("/candidates");
		}else{
			console.log("Application deleted")
			res.redirect("/candidates");
		}
	});
});

module.exports = router;