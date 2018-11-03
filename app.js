var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    cookieParser = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    flash        = require("connect-flash"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    session = require("express-session"),
    seedDB      = require("./seeds"),
    methodOverride = require("method-override");
// configure dotenv
require('dotenv').load();

//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")
    
// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/jingqi_Web';


//const databaseUri = "mongodb://jingqi:jingqi7@ds251223.mlab.com:51223/jingqitravel";

mongoose.connect(databaseUri, { useMongoClient: true })
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));
      
// Campground.create(
//     { name: "Menjalara", 
//         image: "https://my2-cdn.pgimgs.com/listing/23311721/UPHO.91052561.V800/Bandar-Menjalara-Kepong-Bandar-Menjalara-Malaysia.jpg",
//         description: "One of the best spots to eat 肉骨茶, famous Malaysian cuisin! Don't miss it once you travel to Malaysia!",
//          cost: 9,
//          location: "Kepong, Kuala Lumpur",
//          lat: 3.193101,
//          lng: 101.631910,
//     },
    
//     function(err,campground){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("NEWLY CREATED CAMPGROUND: ");
//         console.log(campground);
        
// //         Comment.create(
// //   {
// //      text: "I love this place! Had 肉骨茶 there twice! ^_^",
// //      author: "Jingqi"
// //     },function(err,comment){
// //         if(err){
// //         console.log(err);
// //         }else{
// //             campground.comments.push(comment);
// //         }
// //     });
//     }
// });




app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
//require moment
app.locals.moment = require('moment');
//seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});


app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});