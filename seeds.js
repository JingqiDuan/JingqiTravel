var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Menjalara", 
        image: "https://my2-cdn.pgimgs.com/listing/23311721/UPHO.91052561.V800/Bandar-Menjalara-Kepong-Bandar-Menjalara-Malaysia.jpg",
        description: "One of the best spots to eat 肉骨茶, famous Malaysian cuisin! Don't miss it once you travel to Malaysia!",
         cost: 9,
         location: "Kepong, Kuala Lumpur",
   lat: 3.193101,
   lng: 101.631910,
    },

]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
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
                            text: "I love this place! My baby girlfriend took me there to have lunch! We had 肉骨茶 there twice! ^_^",
                            author: "Jingqi"
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
