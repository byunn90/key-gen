// Assignment Code
var generateBtn = document.querySelector("#generate");

// const

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

const generatePassword = function () {
  var newArray = [];
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var specialCharacter = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "|",
    "/",
    "<",
    ">",
    "?",
    ",",
  ];

  var passwordGenerator = "";
  // choosing length of the password
  var passwordLength = prompt(
    "Enter the length of your password choose a length of at least 8 characters and no more than 128 characters"
  );

  // condition statements
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid Length");
    return;
  }
  var numericChoice = confirm("numeric? Yes:No");
  if (numericChoice === true) {
    newArray = newArray.concat(numbersArray);
  } else if (numericChoice === false) {
  }
  var UppercaseConfirm = confirm("UpperCase Letters? Yes:No");
  if (UppercaseConfirm) {
    newArray = newArray.concat(uppercaseLetters);
  } else if (UppercaseConfirm === false) {
  }
  var lowerCaseConfirm = confirm("LowerCase Letters? Yes:No");
  if (lowerCaseConfirm) {
    newArray = newArray.concat(lowerCaseLetters);
  } else if (lowerCaseConfirm === false) {
  }
  var special = confirm("Special Characters? Yes:No");
  if (special) {
    newArray = newArray.concat(specialCharacter);
  } else if (special === false) {
  }

  for (let index = 0; index < passwordLength; index++) {
    //for (let index = passwordLength; index > 0; index--) {
    var randomIndex = Math.floor(Math.random() * newArray.length);
    var randomCharacter = newArray[randomIndex];
    passwordGenerator = passwordGenerator + randomCharacter;
    // console.log(passwordGenerator);
  }

  return passwordGenerator;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
