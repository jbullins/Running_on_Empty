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


  return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
