//new js file for lab 7
//autho riley
//created 10/28/2024

//get a string from the user, sort it, return the sorted string
function sortStr() {
    let userName = window.prompt("riley");
    return userName.split("").sort().join("")
}


document.writeln(sortStr())