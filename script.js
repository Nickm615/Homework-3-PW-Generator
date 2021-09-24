// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  //prompt for character length input
  var passwordLength = parseInt(prompt("How many charcaters will your password have? Select value between 8 and 128"));
  console.log(passwordLength)
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid Entry, please enter number between 8 and 128");
    return;
  }
  //prompt for lowercase, variable=true if confirmed
  var lowerCase = confirm("Use lowercase letters?")
  var upperCase = confirm("Use uppercase letters?")
  var number = confirm("Use numbers?")
  var symbols = confirm("Use symbols?")
  if (!lowerCase && !upperCase && !number && !symbols) {
    alert("Must select at least one character type");
    return;

  }
  console.log(typeof (passwordLength))
  console.log(lowerCase)
  console.log(upperCase)
  console.log(number)
  console.log(symbols)
  console.log(passwordLength)
  var characterSelection =[]
  if (lowerCase){
  characterSelection.push(..."abcdefghijklmnopqrstuvwxyz".split(''))
  }
  if (upperCase){
    characterSelection.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''))
  }
  if (number){
    characterSelection.push(..."0123456789".split(''))
  }
  if (symbols){
    characterSelection.push(..." !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(''))
  }
  var passwordString = ''
  for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * characterSelection.length)
  console.log(index) 
  passwordString += characterSelection[index]
  }
  return passwordString;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
