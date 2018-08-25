// this is data coming from a server
// var titles = ["East of Eden", "The Hobbit", "Jurassic Park", "Harry Potter 3", "Hamlet"];
// var authors = ["Steinbeck", "Tolkien", "Chrichton", "Rowling", "Shakespeare"];
// var isbnNums = ["0234", "1234", "2234", "3234", "4234"];
// var prices = [14, 12, 7.5, 15, 10];

// for(var i = 0; i < titles.length; i++) {
// 	myInventory.push( new Book(titles[i], authors[i], isbnNums[i], prices[i]) );
// }

// sales tax is 10%

// this is our constructor function
function Book(bookTitle, author, ISBN, price) {
	this.bookTitle = bookTitle;
	this.author = author;
	this.ISBN = ISBN;
	this.price = price;
	this.priceWithTax = function() {
		return this.price * 1.1;
	}
}
// var myObject = new Book("The Hobbit", "Tolkien", "1234", 12);

// this array will contain all of my final Book objects
var myInventory = [
		new Book("East of Eden", "Steinbeck", "0234", 14), 
		new Book("The Hobbit", "Tolkien", "1234", 12), 
		new Book("Jurassic Park", "Chrichton", "2234", 7.5),
		new Book("Harry Potter 3", "Rowling", "3234", 15),
		new Book("Hamlet", "Shakespeare", "4234", 10)
	];

// this for loop creates HTML elements and populates them for each final Book object
for(var i = 0; i < myInventory.length; i++) {
	var newDiv = document.createElement("div");
	var newH2 = document.createElement("h2");
	var newH3 = document.createElement("h3");
	var newP = document.createElement("p");
	var newP2 = document.createElement("p");

		newDiv.className = "col-3 p-5 m-2 bg-info text-white text-center";

		newH2.innerText = myInventory[i].bookTitle;
		newH3.innerText = myInventory[i].author;
		newP.innerText = "ISBN Number: " + myInventory[i].ISBN;
		newP2.innerText = "Price with tax: $" + myInventory[i].priceWithTax();

		newDiv.appendChild(newH2);
		newDiv.appendChild(newH3);
		newDiv.appendChild(newP);
		newDiv.appendChild(newP2);
		document.getElementById("books-go-here").appendChild(newDiv);
}

// function Comment(username, comment) {
// 	this.username = username;
// 	this.comment = comment;
// }

// var comments = [];

// function submitComment() {
// 	var user = document.getElementById("username").value;
// 	var text = document.getElementById("comment").value;
// 	var newPost = new Comment( user, text );

// 	var newDiv = document.createElement("div");
// 	var newH4 = document.createElement("h4");
// 	var newP = document.createElement("p");

// 	newH4.innerText = newPost.username;
// 	newP.innerText = newPost.comment;

// 	newDiv.appendChild(newH4);
// 	newDiv.appendChild(newP);
// 	document.getElementById("comments-go-here").appendChild(newDiv);

// 	comments.push(newPost);
// }