var today = new Date(); // Date obj.
var hourNow = today.getHours(); // Find the current hour
var greeting;

//Display the appropriate greeting based on up boths
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h4>' + greeting + '</h4>');
