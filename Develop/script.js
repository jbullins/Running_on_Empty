// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  var password = "";
  var passwordChar = "";
  // user prompt for password length
  var passwordLengthUser = prompt("Please choose a password lenght between 8 & 128 characters")
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8 || passwordLengthUser > 128) {
    alert("Password must be between 8 and 128 characters")
    return "";
  }

  // user prompt for lowercase letters
  var lowerCaseUser = prompt("Would you like to include lowercase characters?")

  if (lowerCaseUser){
    passwordChar += lowerCaseUser;
  }

  // user prompt for uppercase letters
  var upperCaseUser = prompt("Would you like to include uppercase characters?")

  if (upperCaseUser){
    passwordChar += upperCaseUser;
  }

  // user prompt for numbers
  var numberCaseUser = prompt("Would you like to include numerical characters?")

  if (numberCaseUser){
    passwordChar += numberCaseUser;
  }

  // user prompt for special characters
  var symbolCaseUser = prompt("Would you like to include special characters?")

  if (symbolCaseUser){
    passwordChar += symbolCaseUser;
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
