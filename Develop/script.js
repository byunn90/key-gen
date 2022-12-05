// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacter = ["~", "!", "@", "#", "$", "%", "^", "&"];

// const

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

const generatePassword = function () {};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
