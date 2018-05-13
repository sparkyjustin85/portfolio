//A script to check the current time, and display a custom greeting


var d = new Date(); //create a new Date object
var hour = d.getHours(); //get the current hour
var greeting; //initializes the greeting variable


//Checks the current hour, and changes the greeting variable based on the result
if (hour >= 17 ) {
		greeting = "Good Evening! I\'m Justin.";

} else if (hour >= 12) {
		greeting	= "Good Afternoon! I\'m Justin.";

} else if (hour > 0 ) {
		greeting = "Good Morning! I\'m Justin.";

} else {

	greeting = "Welcome!";
}

//Writes the greeting to the page
document.write(greeting);