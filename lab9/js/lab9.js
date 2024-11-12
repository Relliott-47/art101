/* lab.js - this simple JavaScript/jQuery script uses buttons to modify some elements on the page

Requirements: jQuery must be loased for this script to work.

Author: Wes Modes
Date: 2023

//add button to challenge section*/

$("#challenge").append("<button id='button-challenge'> Click here for $1 million dollars </button>");

//add a click listener to the challenge button
$("button-challenge").click(function(){
  //now add the "special" class to the section
  $("#challenge").toggleClass("special");
}); 


//add button to problem section

$("#problems").append("<button id='button-problems'> Click here for $2 million dollars </button>");

//add button to reflection section

$("reflection").append("<button id='button-results'> Click here for $3 million dollars </button>");

//add button to results section

$("#results").append("<button id='button-results'> Click here for Death </button>");





