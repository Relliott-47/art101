// index.js - Lab 6 
// Experiment with Javascript arrays and objects
// Author: Riley Elliott
// Date: October 25, 2024

// Define the Variables
mytransport = [mymainride, "bus", "feet"];

// Create an object for mymainride
mymainride = {
  make: "Ford",
  model: "Escape",
  color: "green",
  year: 2006,
  age : function() {
    return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", mytransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(mymainride, null, '\t'), "</pre>");
