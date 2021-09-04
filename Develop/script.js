// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}




// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//on click user choice//
var onclickCharacter = function() {
  var userChoice = prompt("How many number of characters in the passcode");
  console.log(userChoice);

  //ask the user for uppercase//
    var userchoiceuppercase = prompt("Do you want to include uppercase in your passcode");
    console.log(userchoiceuppercase);

  //ask the user for lowercase//
    var userchoiceloswercase = prompt("Do you want to include lowercase in your passcode");
    console.log(userchoiceloswercase);


    //ask user for special character
    var userchoisespecial = prompt("Do you want to include special characters in your passcode");
    console.log(userchoisespecial);
  }
  // Get random index from array of options
 // var index = Math.floor(Math.random() * options.length);
 // var generatePassword = options[index];

  //console.log("scriptloaded")