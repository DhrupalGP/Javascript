var movies = [
{	title : 'In Bruges',
	rating : 5,
	view : 'watched'
},

{	title : 'Frogen',
	rating : 4.5,
	view : 'not seen'
},

{	title : 'Mad Max fury road',
	rating : 5,
	view : 'seen'
},

{	title : 'Les Miserable',
	rating : 3.5,
	view : 'not seen'
},

];

for(var i = 0; i < movies.length; i++){
	console.log("you have " + movies[i].view + " " + "\""+movies[i].title +"\""+" - " + movies[i].rating  + " stars.");
}
