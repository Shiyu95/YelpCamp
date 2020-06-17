     var express = require("express"),
    app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	flash = require("connect-flash"),
	passport =require("passport"),
	LocalStratege = require("passport-local"),
	methodOverride = require("method-override"),
	passportLocalMongoose = require("passport-local-mongoose"),
	Campground = require("./models/campground"),
	Comment     = require("./models/comment"),
	User = require("./models/user"),
	seedDB = require("./seeds")

//require routes
var commentRoutes = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes = require("./routes/index");

// console.log(process.env.DATABASEURL);
// mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});

var url = process.env.DATABASEURL|| "mongodb://localhost:27017/yelp_camp"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


mongoose.connect("mongodb+srv://YelpCamp:YelpCamp@cluster0-wvxk8.mongodb.net/<YelpCamp>?retryWrites=true&w=majority", 
	{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
		console.log("Connect to DB");
}).catch(err => {
	console.log("Error:", err.message);
});


app.use(bodyParser.urlencoded({extended:true}));
mongoose.set('useFindAndModify', false);

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.set("view engine","ejs");

//seed the database
//seedDB();


//PASSPORT configuration
app.use(require("express-session")({   
	secret:"momo is very cute",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratege(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});


app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});



// app.listen(3000, process.env.IP, function(){
//    console.log("The YelpCamp Server Has Started!");
// });