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

  //More Questions here

  writePassword();
}

//reference from https://www.w3schools.com/js/js_random.asp//
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generatePassword() {
    // Get 'x' random characters from the lowercase array
    let password = "";
    for (let i = 0; i < userChoice; i++) {
      console.log(`loop number: ${i} , password=${password}`)
      password += lowerCasedCharacters[getRndInteger(0,25)];
    }
  
    return password;
} 


// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordClick);



  /*
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

//0 true outcone//

  //4 true outcome//
  console.log("this is running")
  if (userChoiceUpperCase && userChoiceLowerCase && userChoiceSpecial && userchoisenumeric){
    userendChoice = numericCharacters.concate(upperCasedCharacters,lowerCasedCharacters,specialCharacters);
  }

  //3 true outcome//
  else if (userChoiceNumeric && userChoiceUpperCase && userChoiceLowerCase){
    userendChoice = numericCharacters.concate(upperCasedCharacters,lowerCasedCharacters);
  }

  else if (userChoiceUpperCase && userChoiceLowerCase && userChoiceSpecial){
    userendChoice = upperCasedCharacters.concate(lowerCasedCharacters,specialCharacters);
  }

  else if (userChoiceNumeric && userChoiceLowerCase &&  userChoiceSpecial){
    userendChoice = upperCasedCharacters.concate(lowerCasedCharacters,specialCharacters);
  }

  else if (userChoiceNumeric && userChoiceLowerCase &&  userChoiceSpecial){
    userendChoice = numericCharacters.concate(lowerCasedCharacters,specialCharacters);
  }

 else if (userChoiceNumeric && userChoiceUpperCase && userChoiceSpecial){
    userendChoice = numericCharacters.concate(upperCasedCharacters,specialCharacters);
  }

  //2 true outcome//

 else if (userChoiceNumeric && userChoiceUpperCase){
    userendChoice = numericCharacters.concate(upperCasedCharacters);
  }

 else if (userChoiceNumeric && userChoiceLowerCase){
    userendChoice = numericCharacters.concate(lowerCasedCharacters);
  }

 else if (userChoiceNumeric && userChoiceSpecial){
    userendChoice = numericCharacters.concate(specialCharacters);
  }

 else if (userChoiceUpperCase && userChoiceLowerCase){
    userendChoice = upperCasedCharacters.concate(lowerCasedCharacters);
  }

 else if (userChoiceUpperCase && userChoiceSpecial){
    userendChoice = upperCasedCharacters.concate(specialCharacters);
  } else if (userChoiceLowerCase && userChoiceSpecial) {
    userendChoice = lowerCasedCharacters.concate(specialCharacters);
  }
// JAvscript style guide: https://github.com/airbnb/javascript

  //1 true outcome  
  
 else if (userChoiceNumeric) {
   userendChoice = numericCharacters
 } else if (userChoiceUpperCase) {
   userendChoice = upperCasedCharacters} 
 else if (userChoiceLowerCase){
   userendChoice = lowerCasedCharacters}
 else if (userChoiceSpecial){
   userendChoice = specialCharacters}


  
  // Get random index from array of userendChoice
 // var index = Math.floor(Math.random() * userendChoice.length);
 // var generatePassword = userendChoice[index];

  //console.log("scriptloaded")

  //if userChoice (<8 || > 128) {alert("choose a number between 8 and 128");
  */