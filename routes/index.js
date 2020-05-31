let express = require("express");
let router = express.Router();
let passport = require("passport");
let User = require("../models/user");
router.get("/",function(req,res){
	res.render("landing");
});

router.get("/register", function(req,res){
	res.render("register");
})
//SIGNUP LOGIC
router.post("/register", function(req,res){
	let newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err,user){
		if(err){
			req.flash("error", err.message);
			return res.redirect("register");
		}
		else{
			passport.authenticate("local")(req, res, function(){
				req.flash("success", "Welcome to YelpCamp" + user.username);
				res.redirect("/campgrounds");		
			});
		}
	});
 });


//login form
router.get("/login", function(req,res){
	res.render("login");
});

router.post("/login", passport.authenticate("local", 
	 {
			successRedirect: "/campgrounds", 
			failureRedirect: "/login"
		}), function(req,res){
});
//logout
router.get("/logout", function(req,res){
	req.logout();
	req.flash("success", "Logged out!");
	res.redirect("/campgrounds");
});
module.exports = router;
