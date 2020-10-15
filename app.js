if (process.env.NODE_ENV !== "production") {
	require('dotenv').config();
}

const express        = require("express"),
	    bodyParser     = require("body-parser"),
	    mongoose       = require("mongoose"),
	    Animal         = require("./models/animal"),
	    Application    = require("./models/application"),
	    User           = require("./models/user"),
	    seedDB         = require("./seeds"),
	    path           = require("path"),
	    passport       = require("passport"),
	    LocalStrategy  = require("passport-local"),
	    methodOverride = require("method-override"),
	    app            = express();

//requiring routes
const applicationRoutes = require("./routes/applications"),
	    animalRoutes      = require("./routes/animals"),
	    indexRoutes       = require("./routes/index");


//seedDB();
//serves css stylesheets and images
app.use(express.static(path.join(__dirname, 'public')));
//mongoose settings to resolve deprection warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
//create and connect to TheArk db
//mongoose.connect("mongodb://localhost/TheArk");
mongoose.connect(process.env.DB_URL, { 
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log("Connected to mongoDB Atlas");
}).catch(err => {
	console.log("Error: ", err.message);
});
app.use(methodOverride("_method"));


//PASSPORT CONFIG//
app.use(require("express-session")({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//this line is needed for bodyparser, always include
app.use(bodyParser.urlencoded({extended: true}));
//use ejs as view engine for express
app.set("view engine", "ejs");
//pass currentUser to all routes
app.use((req, res, next)=>{
	res.locals.currentUser = req.user;
	next();
});

app.use(indexRoutes);
app.use(animalRoutes);
app.use(applicationRoutes);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});