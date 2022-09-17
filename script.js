// Assignment Code
var generateBtn = document.querySelector("#generate");

// The generatePassword function has a prompt for the password size, converts the size variable into an integer called SizeInt using the ParseInt function. This is so that if a non-number is
// entered for prompt, it will return an alert and start the function over. SizeInt is also used the same way to limit the size value between 8 and 128. 

function generatePassword() {
  var password = ""
  var size = prompt("How many characters?")
  var sizeInt = parseInt(size)
  if (sizeInt < 8 || sizeInt > 128) {
    alert("You must choose a value between 8 and 128!");
    return generatePassword();
  }
  if (Number.isNaN(sizeInt)) {
    alert("You must choose a number!")
    return generatePassword();
  }

// the variables for the confirm statements are stated as false. I used a 'While Loop' to make sure that while they were all false, the confirm messages would continue to repeat, forcing the user
// to pick at least one confirm statement. 
// if they click Cancel on all 4, an alert statement pops up after to tell them to pick one. 

  var lchoice = false;
  var uchoice = false;
  var schoice = false;
  var nchoice = false;
  while (!lchoice && !uchoice && !schoice && !nchoice) {
    lchoice = confirm("Would you like to generate Lowercase letters?");
    uchoice = confirm("Would you like to generate Uppercase letters?");
    schoice = confirm("Would you like to generate Special Characters?");
    nchoice = confirm("Would you like to generate Numbers?");
      if (!lchoice && !uchoice && !schoice && !nchoice) {
      alert("You must pick one type of character!");
    }
  }

// Here is the my 'For Loop' that utilizes the DecisionArray function to return a random series of characters.

  const Characters = DecisionArray(lchoice, uchoice, schoice, nchoice);
  for (let i = 0; i < sizeInt; i++) {
    let randPass = Math.random() * Characters.length;
    let randNum = Math.floor(randPass);
    let passChoice = Characters[randNum];
    password += passChoice;
  }
  return password;
}

// The DecisionArray function defines a 'totals' array as empty, defines the 4 other arrays for types of characters, then uses an If statment below. If the confirm values are true, the corresponding
// array is concatenated into the 'totals' array.

  function DecisionArray(lchoice, uchoice, schoice, nchoice) {
    let totals = [];
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+",
    "~", "?", "<", ">"];
    const numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (lchoice)
      totals = totals.concat(lowerCase)
    if (uchoice)
      totals = totals.concat(upperCase)
    if (schoice)
      totals = totals.concat(specialChar)
    if (nchoice)
      totals = totals.concat(numericChar)
    return totals;
  }

function writePassword() {
  var passwordText = document.querySelector("#password");
  let password = generatePassword()
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
