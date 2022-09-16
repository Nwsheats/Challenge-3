// Assignment Code
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+",
"~", "?", "<", ">"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Characters = lowerCase.concat(upperCase, specialChar, numericChar);
console.log(Characters);

var totals = [];

var generateBtn = document.querySelector("#generate");

// object storing 

function writePassword() { 

  // concat based on options selected


function generatePassword() {
  var password = ""
  var size = prompt("How many characters? ")
  
  for (let i = 0; i < size; i++) {
    var randPass = Math.random() * lowerCase.length;
    var randNum = Math.floor(randPass);
    var passChoice = lowerCase[randNum];
    password += passChoice;
  }
  return password;
}
// Write password to the #password input


  var password = generatePassword()
  // var lchoice = confirm("Would you like to generate Lowercase letters?");
  // var uchoice = confirm("Would you like to generate Uppercase letters?");
  // var schoice = confirm("Would you like to generate Special Characters?");
  // var nchoice = confirm("Would you like to generate Numbers?");
  // console.log("User has chosen " + lchoice + " and " + uchoice + " and " + schoice + " and " +
  // nchoice);

//if lchoice is true, store true as part of the object


  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);

}

//* math.floor or math.random

//* object 

//* return object (4 different options/Booleans + length)

//* make a string in Generate Password function to concat)

//* store options info into an object, create an object and set properties. Use object in GeneratePassword function.

//* 1. Get password options function, store array values into an object. Length and Booleans. Conditionals
//* 2. Work on Generate Password function - make an actual function, return a string from the end of that.
//* 3. 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
