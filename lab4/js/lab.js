// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// load graphics: 
  // load a pool table graphic. 
  // load pool ball graphics, 15 labeled 1-15, colored according to standardized pool tables and an additional white pool ball graphic for white ball.
  // load pool cue Graphic
//define pool table boundaries in which balls stay inside
//Define user action conditions
  //Putting white ball into a pocket skips a user’s turn, allowing the opponent to place it anywhere during their turn
  //Putting the correctly assigned ball into a pocket permits another turn
  //Putting the opponent’s ball into a pocket gives them a point and counts as a turn
//Win condition
  //After a user’s assigned balls are in pockets, the black 8-ball must be hit into a pocket for a win
  //Putting black 8-ball into a pocket makes opponent win
//Apply physics simulations to each manipulatable object on the pool table. 
//Apply collision simulations for interactions between manipulatable parts of the pool table
//Set pool cue as free ranging object that can be pulled back and forth along the y-axis and x-axis and rotated 360 degrees around a point on the pool cue to interact with balls on the table.
//Set the default break position
  //Place white ball along the center. 
  //Place racked colored balls opposite the white
//Assign one user to break the triangle, allow user input
//Use user input to determine next action. The user gets assigned either a solid or striped ball depending on the type of ball they put in.
//Allow second user input
//Loop user input turns and action conditions until the win condition happens
