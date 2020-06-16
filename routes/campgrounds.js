var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");



//Index - show a list of campgrounds
router.get("/",function(req,res){

	//get all campgrounds from db

	Campground.find({},function(err,allCampgrounds){
	if(err){
		console.log("ERROR");
		console.log(err);
	}else{
		res.render("campgrounds/index",{campgrounds:allCampgrounds});
	}
});

	
});


//Create - add a new campground to DB
router.post("/", middleware.isLoggedIn, function(req,res){
	//get data form form to array
	var name = req.body.name;
	var price = req.body.price;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id:req.user._id,
		username:req.user.username
	}
	var newCampground = {name: name, price:price, image: image, description:desc, author:author}
	

	//campgrounds.push(newCampground);

	//create a new campground and save to db
	Campground.create(newCampground,function(err,newlyCreated){
		if(err){
			
			console.log(err);
		}else{
			console.log(newlyCreated);
			res.redirect("/campgrounds");
		}
	});
	//redirect back to campgrounds page
	//res.redirect("/campgrounds");

});

//NEW --display form to make a new campground
router.get("/new",  middleware.isLoggedIn, function(req,res){
	res.render("campgrounds/new");
});

//ShOW -- show more information about campground

router.get("/:id", function(req, res){
    //find the campground with provided ID
     Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //console.log(foundCampground);
            //console.log(foundCampground.author.id);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});



//Edit Campgrounds route
router.get("/:id/edit",  middleware.checkCampgroundOwnership, function(req,res){ 
	Campground.findById(req.params.id, function(err,foundCampground){		
		res.render("campgrounds/edit", {campground: foundCampground});	
		});
	//otherwise redirect
	//if not, redirect
});

//Update campground route

router.put("/:id", middleware.checkCampgroundOwnership, function(req,res){
	//find and update the correct campground
	Campground.findOneAndUpdate(req.params.id, req.body.campground, function(err,updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		}else{
			 res.redirect("/campgrounds/" + req.params.id);
		}
	});

	//redirect somewhere show page
});




//delete campground route
router.delete("/:id",  middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds");
		}
	});
});




module.exports = router; 
