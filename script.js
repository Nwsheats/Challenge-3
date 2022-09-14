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






var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var lchoice = prompt("Would you like to generate Lowercase letters?");
  var uchoice = prompt("Would you like to generate Uppercase letters?");
  var schoice = prompt("Would you like to generate Special Characters?");
  var nchoice = prompt("Would you like to generate Numbers?");
  console.log("User has chosen " + lchoice + " and " + uchoice + " and " + schoice + " and " +
  nchoice);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
