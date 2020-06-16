#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds
	* Name
	* Image
* Layout and Basic Styling
	* Create our header and footer partials
	* Add in Bootstrap
* Creating New Campgrounds
	* Setup new campground POST route
	* Add in body-parser
	* Setup route to shouw form
	* Add basic unstyled form
* Style the Campgrounds page
	* Add a better header/title
	* Make campgrounds display in a grid
* Style the Navbar and Form
	* Add a navbar to all templates
	* Style the new campground form


* Add Mongoose
	* Install and configure mongoose
	* Setup campground model
	* Use camoground model inside of our routes!
* Show Page
	* Review the RESTful routes we've seen so far
	* Add description to our campground model
	* Show db.collection.drop()
	* Add a show route/template
* Refactor mongoose code
	* Create a models directory
	* Use module.expports
	* Require everything correctly



* Add Seeds File
	* Add a seed.js file
	* Run the seeds file every time the server starts
* Add the Comment mode
	* make our errors go away
	* Dispaly comments on campground show page


* Comment New/Create
	* nested routes
	* add the comment new and create routes
	* add the new comment form
index     /campgrounds
new  	  /campgrounds/new
create    /campgrounds
show 	  /campgrounds/:id


new   	  campgrounds/:id/comments/new    GET        //nasted routes
create    campgrounds/:id/comments        POST	



* Style Show Page
	* Add sidebar to show page
	* Display comments nicely
	* Add public directory
	* Add custom stylesheet


* Add User Model
	* Install all packages for auth
	* Define user model

* Register
	* Configure Passport
	* Add register routes
	* Add register template 

* Login
	* add login routes
	* add login template

* Logout/Navbar
	* add logout route
	* prevent user from adding a comment if not signed in
	* add links to navar
	* show /hide auth links correctly

* Show/Hide Links
	* show/hide auth links in navbar





* Refactor the routes
	* use express router to reoragnize all routes

* Users + Comments
	* Associate users and comments
	* save author's name to a comment automatically


* User/Campgrounds
	* prevent an unauthenticated user from creating a campground
	* save username id to newly created campground






* Editing campgrounds
	* add method-override
	* add edit route for Campgrounds
	* add link to edit page
	* add update route
	* fix $set problem

* Deleting Campground
	* add Destroy route
	* add delete button

* Authorization : campgrounds
	* user can only edit his/her campgrounds
	* user can only delete his/her campgrounds
	* hide/show edit and delete button
	* refactor middleware

* Editing Comments
	* add edit route for comments
	* add edit button
	* add update route

Campground Edit Route:<!-- 	/campgrounds/:id/edit-->
Comment Edit Route: <!-- /campgrounds/:id/comments/:comment_id/edit -->

* Deleting Comments
	* add delete route
	* add delete button

Campground Destory Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

* Authorization : comments
	* user can only edit his/her comments
	* user can only delete his/her comments
	* hide/shoe edit and delete button
	* refactor middleware






* Adding in Flash
	* Demo working version
	* install and configure connect-flash
	* and bootstrap alerts to header











