var Product = require('../models/product');



var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [new Product({
    imagePath: 'https://static.gamespot.com/uploads/scale_medium/mig/9/7/0/6/2209706-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!',
    price: 10
}),
   
    new Product({
    imagePath: 'https://lh3.googleusercontent.com/30koN0eGl-LHqvUZrCj9HT4qVPQdvN508p2wuhaWUnqKeCp6nrs9QW8v6IVGvGNauA=w300',
    title: 'Minecraft Video Game',
    description: 'Survival Game!!!!',
    price: 30
}),
                
    new Product({
    imagePath: 'http://www.dreadcentral.com/wp-content/uploads/2017/03/the-ringed-city.jpg',
    title: 'DarkSoul 3 PC Game',
    description: 'Adventure Game!!!!',
    price: 50
        
}),
                
                
    new Product({
    imagePath: 'http://cdn2.knowyourmobile.com/sites/knowyourmobilecom/files/styles/gallery_wide/public/0/67/GTAV-GTA5-Michael-Sweatshop-1280-2277432.jpg?itok=-uTrjouB',
    title: 'Gta V PC Game',
    description: 'RPG hit Game!!!!',
    price: 100
})      
    

];




function exit() {
    mongoose.disconnect();
}



var done = 0;


for(var i = 0; i < products.length; i++)
{
    products[i].save(function(err, result) {
        done++;
        if (done === products.length)
            {
                exit();
            }
    });
}






