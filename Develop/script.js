// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//variables//

var onclickCharacter
var userChoice
var userchoiceuppercase 
var userchoiceloswercase
var userchoisespecial
var userchoicenumeric
var userendChoice = []


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
var userChoice = prompt("How many number of chracters in your passcode, choose between 8 and 128");
console.log(userChoice);

//ask the user for uppercase//
var userchoiceuppercase = confirm("Do you want to include uppercase in your passcode");
console.log(userchoiceuppercase);

//ask the user for lowercase//
var userchoiceloswercase = confirm("Do you want to include lowercase in your passcode");
console.log(userchoiceloswercase);


//ask user for special character
var userchoisespecial = confirm("Do you want to include special characters in your passcode");
console.log(userchoisespecial);

//ask user for numeric chracters
var userchoisenumeric = confirm("Do you want to include special characters in your passcode");
console.log(userchoisenumeric);
}

//0 true outcone//

  //4 true outcome//
  if (userchoiceuppercase && userchoiceloswercase && userchoisespecial && userchoisenumeric){
    userendChoice = (numericCharacters.concate(upperCasedCharacters,lowerCasedCharacters,specialCharacters);
  }

  //3 true outcome//
  else if (userchoisenumerie && userchoiceuppercase && userchoiceloswercase){
    userendChoice = (numericCharacters.concate(upperCasedCharacters,lowerCasedCharacters);
  }

  else if (userchoiceuppercase && userchoiceloswercase && userchoisespecial){
    userendChoice = (upperCasedCharacters.concate(lowerCasedCharacters,specialCharacters);
  }

  else if (userchoisenumeric && userchoiceloswercase &&  userchoisespecial){
    userendChoice = (upperCasedCharacters.concate(lowerCasedCharacters,specialCharacters);
  }

  else if (userchoisenumeric && userchoiceloswercase &&  userchoisespecial){
    userendChoice = (numericCharacters.concate(lowerCasedCharacters,specialCharacters);
  }

 else if (userchoisenumeric && userchoiceuppercase && userchoisespecial){
    userendChoice = (numericCharacters.concate(upperCasedCharacters,specialCharacters);
  }

  //2 true outcome//

 else if (userchoisenumeric && userchoiceuppercase){
    userendChoice = numericCharacters.concate(upperCasedCharacters);
  }

 else if (userchoisenumeric && userchoiceloswercase){
    userendChoice = numericCharacters.concate(lowerCasedCharacters);
  }

 else if (userchoisenumeric && userchoisespecial){
    userendChoice = numericCharacters.concate(specialCharacters);
  }

 else if (userchoiceuppercase && userchoiceloswercase){
    userendChoice = upperCasedCharacters.concate(lowerCasedCharacters);
  }

 else if (userchoiceuppercase && userchoisespecial){
    userendChoice = upperCasedCharacters.concate(specialCharacters);
  }

 else if (userchoiceloswercase && userchoisespecial){
    userendChoice = lowerCasedCharacters.concate(specialCharacters);
  }

  //1 true outcome//
  
 else if (userchoisenumeric){userendChoice = numericCharacters};
 else if (userchoiceuppercase){userendChoice = upperCasedCharacter};
 else if (userchoiceloswercase){userendChoice = lowerCasedCharacters};
 else if (userchoisespecial){userendChoice = specialCharacters};

  
  // Get random index from array of userendChoice
 // var index = Math.floor(Math.random() * userendChoice.length);
 // var generatePassword = userendChoice[index];

  //console.log("scriptloaded")