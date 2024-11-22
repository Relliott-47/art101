/*
    lab.js - this simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
    requirements: jQuery must be loaded for this script to work.

    Author: Riley Elliott
    Date: 2024
    */

    //Sorts the characters of a string in alphabeltical order. 
    function sortString(inputString) {
        //We have to convert our string to an array and back again to sort it
        return inputString.split('').sort().join('');
    }

    //click listener for button 
    $("#submit").click(function(){
    });

    //get value of listner for button
    const userName = $("#user-name").val();

    //now let's sort it 
    userNameSorted = sortString(userName);

    //append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');