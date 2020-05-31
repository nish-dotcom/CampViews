let mongoose = require("mongoose"),
	Campground = require("./models/campgrounds"),
	Comment = require("./models/comments");
let	data = [{
		name: "Cloud's Rest", 
		image: "https://cottagelife.com/wp-content/uploads/2015/08/800px-Berg_Lake_Canadian_Rockies.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere justo placerat nulla porta aliquet. Nullam et dolor tempus, ultrices mi at, cursus augue. Aenean lobortis eu dolor vitae aliquet. Phasellus vestibulum est nec nisi consectetur, a malesuada tellus varius. Sed est quam, egestas non risus sit amet, molestie auctor ante. Nam eget ex in urna bibendum suscipit viverra ut magna. Etiam facilisis felis nec nisi auctor laoreet. Nam quis laoreet magna. Nunc molestie, eros a auctor varius, tellus augue dignissim ex, quis gravida mi neque a nunc. Ut sapien ligula, pharetra non dui eu, auctor scelerisque tellus. Ut non arcu nec magna facilisis interdum. Nulla vitae neque luctus, varius nibh nec, efficitur felis. Quisque fringilla, est vitae posuere dapibus, nibh eros cursus urna, vel bibendum erat turpis ut lorem. Suspendisse convallis, odio in varius imperdiet, est tortor tincidunt nunc, sit amet finibus orci massa quis arcu. Donec lobortis, eros id dignissim condimentum, elit magna rutrum libero, vel rutrum nulla libero sed massa. "
	},
		{
		name: "Desert Mesa", 
		image: "https://www.todocanada.ca/wp-content/uploads/Best-Places-to-Camp-in-Saskatchewan.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere justo placerat nulla porta aliquet. Nullam et dolor tempus, ultrices mi at, cursus augue. Aenean lobortis eu dolor vitae aliquet. Phasellus vestibulum est nec nisi consectetur, a malesuada tellus varius. Sed est quam, egestas non risus sit amet, molestie auctor ante. Nam eget ex in urna bibendum suscipit viverra ut magna. Etiam facilisis felis nec nisi auctor laoreet. Nam quis laoreet magna. Nunc molestie, eros a auctor varius, tellus augue dignissim ex, quis gravida mi neque a nunc. Ut sapien ligula, pharetra non dui eu, auctor scelerisque tellus. Ut non arcu nec magna facilisis interdum. Nulla vitae neque luctus, varius nibh nec, efficitur felis. Quisque fringilla, est vitae posuere dapibus, nibh eros cursus urna, vel bibendum erat turpis ut lorem. Suspendisse convallis, odio in varius imperdiet, est tortor tincidunt nunc, sit amet finibus orci massa quis arcu. Donec lobortis, eros id dignissim condimentum, elit magna rutrum libero, vel rutrum nulla libero sed massa. "
	},{
		name: "Canyon Floor", 
		image: "https://www.todaysparent.com/wp-content/uploads/2013/06/TP07_CampingSpot1-iStock-pac90121.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere justo placerat nulla porta aliquet. Nullam et dolor tempus, ultrices mi at, cursus augue. Aenean lobortis eu dolor vitae aliquet. Phasellus vestibulum est nec nisi consectetur, a malesuada tellus varius. Sed est quam, egestas non risus sit amet, molestie auctor ante. Nam eget ex in urna bibendum suscipit viverra ut magna. Etiam facilisis felis nec nisi auctor laoreet. Nam quis laoreet magna. Nunc molestie, eros a auctor varius, tellus augue dignissim ex, quis gravida mi neque a nunc. Ut sapien ligula, pharetra non dui eu, auctor scelerisque tellus. Ut non arcu nec magna facilisis interdum. Nulla vitae neque luctus, varius nibh nec, efficitur felis. Quisque fringilla, est vitae posuere dapibus, nibh eros cursus urna, vel bibendum erat turpis ut lorem. Suspendisse convallis, odio in varius imperdiet, est tortor tincidunt nunc, sit amet finibus orci massa quis arcu. Donec lobortis, eros id dignissim condimentum, elit magna rutrum libero, vel rutrum nulla libero sed massa. "
	}];

function seedDB(){
	//Remove all Campgrounds
	Campground.remove({}, function(err){
	if(err){
		console.log(err)
	}
	console.log("removed campgrounds");
	data.forEach(function(seed){
	Campground.create(seed, function(err, campground){
		if(err){
			console.log(err);
		}
		else{
			console.log("Added a campground");
			//create comment
			Comment.create({text: "This place is great but no Wi-fi ", 
							author: "homer"},function (err, comment){
				if(err){
					console.log(err);
				}
				else{
					campground.comments.push(comment);
					campground.save();
					console.log("created new comment");
				}
				
			});
		}
	});
	});
})
};

module.exports = seedDB;