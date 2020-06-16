var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
{
	name : "Cloud's Rest",
	image : " https://image.shutterstock.com/image-photo/family-vacation-travel-holiday-trip-600w-691677433.jpg",
	description:"bababa"
},
{
	name : "Cloud's Rest",
	image : " https://image.shutterstock.com/image-photo/family-vacation-travel-holiday-trip-600w-691677433.jpg",
	description : "ahahah"
},
{
	name : "Cloud's Rest",
	image :" https://image.shutterstock.com/image-photo/family-vacation-travel-holiday-trip-600w-691677433.jpg",
	description :"mamama"
}
]


function seedDB(){
   //Remove all campgrounds
   Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;

