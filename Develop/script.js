// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "#!$%&'()*+-./:;<=>?@[\^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Password Generator
function generatePassword() {
  var result = "";
  var choiceChars = "";
  // user prompt for password length
  var passwordLengthUser = prompt("Please choose a password length between 8 & 128 characters")
 // Display message if not between 8 and 128
  if (passwordLengthUser < 8 || passwordLengthUser > 128) {
    alert("Password must be between 8 and 128 characters");
    return generatePassword()
  }
  console.log(passwordLengthUser);
  // user prompt for lowercase letters
  var lowerCaseUser = confirm("Would you like to include lowercase characters?");
    
  console.log(lowerCaseUser);
  // user prompt for uppercase letters
  var upperCaseUser = confirm("Would you like to include uppercase characters?");
  
  console.log(upperCaseUser);
  // user prompt for numbers
  var numberUser = confirm("Would you like to include numerical characters?");

  console.log(numberUser);

  // user prompt for special characters
  var symbolUser = confirm("Would you like to include special characters?");

  console.log(symbolUser);
  
  // Display message if user choose no character types
  if(!lowerCaseUser&&!upperCaseUser&&!numberUser&&!symbolUser){
    alert("You must choose at least one character type");
    return generatePassword()
  }

  if(lowerCaseUser){
    choiceChars += lowerCase
  }
  if(upperCaseUser){
    choiceChars += upperCase
  }
  if(numberUser){
    choiceChars += number
  }
  if(symbolUser){
    choiceChars += symbol
  }
 
  for (var i = 0; i < passwordLengthUser; i++){
    result += choiceChars.charAt(Math.floor(Math.random() * choiceChars.length)); 
  }

  return result;
}


