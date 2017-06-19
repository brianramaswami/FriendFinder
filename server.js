//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Initiates htmlRoutes.js routes
var htmlRoutes = require('./app/routes/htmlRoutes.js')(app,path);
//Initiates apiRoutes.js routes
var apiRoutes = require('./app/routes/apiRoutes.js')(app,path);

//Servers public content such as CSS Javascript required in the HTML files
app.use(express.static(path.join(__dirname,'app/public')));

//Listening to the server port
app.listen(PORT,()=>{
    console.log('Server listening on PORT ' + PORT);
});