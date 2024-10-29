
//sortUserName - a function that takes user input and sorts the letters
//of their name
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);

    if (userName !=null){
        document.getElementById("demo").innerHTML =
        "Here's your new name, I hope you like it: " + sortUserName
    }

    //split string to array
    var nameArray = userName.split('');

    //sort the array
    var nameArraySort = nameArray.sort();
    console.log ("nameArraysort =", nameArraySort);

    // join array back to a string 
    var nameSorted = nameArraysort.join('');
    console.log("nameSorted =", nameSorted);
    
    // Note that I could have done the above lines as a single line: 
    //     userName.toLower().split("").sort().join("")
    return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed your name:",
    sortUserName(), "</br>");
