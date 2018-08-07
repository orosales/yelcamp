var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var campgrounds = [
    {name:"Salmon Creek", image:"https://kid101.com/wp-content/uploads/2018/05/sleepaway.jpg"},
    {name:"Granite Hill", image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name:"Montain", image:"http://imavex.vo.llnwd.net/o18/clients/indianadeafcamp/images/Gallery/2014deafcamp.jpg"},
    {name:"Montain", image:"https://acadiamagic.com/280x187/md-campground.jpg"},
    {name:"Salmon Creek", image:"https://kid101.com/wp-content/uploads/2018/05/sleepaway.jpg"},
    {name:"Granite Hill", image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name:"Montain", image:"http://imavex.vo.llnwd.net/o18/clients/indianadeafcamp/images/Gallery/2014deafcamp.jpg"}


];


app.get("/", function(req, res) {
    //res.send("Hiii");
    res.render("landing");
})

app.get("/campgrounds", function(req, res) {
 
 res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image:image};
    campgrounds.push(newCampground);
    //res.send("You are in POST");
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
} );

app.listen(3000, process.env.IP, function () {
    console.log("Starting APP");
});