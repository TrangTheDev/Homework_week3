// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//variables//

var onClickCharacter;
var userChoice;
var userChoiceUpperCase;
var userChoiceLowerCase;
var userChoiceSpecial;
var userChoiceNumeric;
var userEndChoice = [];


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


//on click user choice//
var generatePasswordClick = function() {
  userChoice = prompt("How many number of chracters in your passcode, choose between 8 and 128");
  console.log(userChoice);

  if (userChoice >= 8 && userChoice <= 128) {
    
    //ask the user for uppercase//
    userChoiceUpperCase = confirm("Do you want to include uppercase in your passcode");
    console.log(userChoiceUpperCase);

    //ask the user for lowercase//
    userChoiceLowerCase = confirm("Do you want to include lowercase in your passcode");
    console.log(userChoiceLowerCase);

    //ask user for special character
    userChoiceSpecial = confirm("Do you want to include special characters in your passcode");
    console.log(userChoiceSpecial);

    //ask user for numeric character
    userChoiceNumeric = confirm("Do you want to include numeric characters in your passcode");
    console.log(userChoiceNumeric);
    

    //More Questions here

    writePassword();
  } else {
    alert("Invalid character length entered");
  }

   //More Questions here

}


//reference from https://www.w3schools.com/js/js_random.asp//
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generatePassword() {
  
  //4 true statement// 
  if (userChoiceUpperCase && userChoiceLowerCase && userChoiceSpecial && userChoiceNumeric) {
    userEndChoice = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters, numericCharacters)
  } 

  //3 true statement//
  else if (userChoiceUpperCase && userChoiceLowerCase && userChoiceSpecial) {
    userEndChoice = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters)
  } 
  
  else if (userChoiceUpperCase && userChoiceLowerCase && userChoiceNumeric){
    userEndChoice = upperCasedCharacters.concat(lowerCasedCharacters,numericCharacters);
  }

  else if (userChoiceNumeric && userChoiceLowerCase &&  userChoiceSpecial){
    userEndChoice = upperCasedCharacters.concat(lowerCasedCharacters,specialCharacters);
  }

  else if (userChoiceNumeric && userChoiceLowerCase &&  userChoiceSpecial){
    userEndChoice = numericCharacters.concat(lowerCasedCharacters,specialCharacters);
  }

  else if (userChoiceNumeric && userChoiceUpperCase && userChoiceSpecial){
    userEndChoice = numericCharacters.concat(upperCasedCharacters,specialCharacters);
  }

  //2 true outcome//

  else if (userChoiceNumeric && userChoiceUpperCase){
    userEndChoice = numericCharacters.concat(upperCasedCharacters);
  }

  else if (userChoiceNumeric && userChoiceLowerCase){
    userEndChoice = numericCharacters.concat(lowerCasedCharacters);
  }

 else if (userChoiceNumeric && userChoiceSpecial){
    userEndChoice = numericCharacters.concat(specialCharacters);
  }

  else if (userChoiceUpperCase && userChoiceLowerCase){
    userEndChoice = upperCasedCharacters.concat(lowerCasedCharacters);
  }

  else if (userChoiceUpperCase && userChoiceSpecial){
    userEndChoice = upperCasedCharacters.concat(specialCharacters);
  }

  else if (userChoiceLowerCase && userChoiceSpecial) {
    userEndChoice = lowerCasedCharacters.concat(specialCharacters);
  }

  //1 true statement//
  else if (userChoiceNumeric) {
  userEndChoice = numericCharacters
  } else if (userChoiceUpperCase) {
  userEndChoice = upperCasedCharacters} 
  else if (userChoiceLowerCase){
  userEndChoice = lowerCasedCharacters}
  else if (userChoiceSpecial){
  userEndChoice = specialCharacters}


  let password = "";
  for (let i = 0; i < userChoice; i++) {
    console.log(`loop number: ${i} , password=${password}`)
    password += userEndChoice[getRndInteger(0, userEndChoice.length - 1)];
  }
  
  return password;
} 


// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordClick);




/*
 





 
  }
// JAvscript style guide: https://github.com/airbnb/javascript




  //console.log("scriptloaded")
*/

  