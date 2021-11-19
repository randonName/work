const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
var path = require("path");
const multer = require("multer");

const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({ 
  extname: '.hbs',
  defaultLayout: 'layouts',
  layoutDir: __dirname + '/views/layouts/', 
}));
app.set('view engine', '.hbs');
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
  
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static('./public/'));


app.listen(HTTP_PORT, onHttpStart);
const Sequelize = require('sequelize');
var sequelize = new Sequelize('dam3o47dlasf3i', 'qmegfvdktshojn', 'b9a9c24131c3d9133304035b02a78d491e3951aca37eeb556ba03524e13ebd45', {
    host: 'ec2-54-226-56-198.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
    
});

var User = sequelize.define('User', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.TEXT,
    password: Sequelize.TEXT
});



/*
app.get("/login", function(req, res){
  //res.sendFile(path.join(__dirname + "/views/login.html"));
  res.render("login", {});
});
app.post("/login",(req, res) => {});



app.get("/registration", function(req, res){
    //res.sendFile(path.join(__dirname + "/views/registration.html"));
    //res.render("registration", {});
    res.render("registration", { layout: false });
  
  });

app.post("/register-user",(req, res) => {});
  */


app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });