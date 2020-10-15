const express = require("express"),
	  router  = express.Router(),
	  passport = require("passport"),
	  User     = require("../models/user");

//landing page
router.get("/", (req, res)=>{
	res.redirect("/animals");
});

//authentication routes
router.get("/register", (req, res)=>{
	res.render("register");
});

router.post("/register", (req, res)=>{
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, (err, user)=>{
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, ()=>{
			res.redirect("/animals");
		});
	});
});

router.get("/about", (req, res)=>{
	res.render("aboutUs");
});

router.get("/login", (req, res)=>{
	res.render("login");
});

router.post("/login", passport.authenticate("local",
	{
		successRedirect: "/animals", 
		failureRedirect: "/login"
	}), (req, res)=>{
});

router.get("/logout", (req, res)=>{
	req.logout();
	res.redirect("/animals");
});


module.exports = router;