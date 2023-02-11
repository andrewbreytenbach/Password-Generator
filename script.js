
// Add event listener to generate button. I didn't need the var generateBtn = document.querySelector("#generate"); that came with the starter code if I wrote it this way. 
var generatedPassword = document.getElementById("generate").addEventListener("click", function() {
  var passwordPrompt = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128 characters.");
  
  if (passwordPrompt === null) {
    return;
  }}
// Assignment code here
, function generatePassword() {

  for (var i = 0; i <= passwordLength; i++) {
  var randomUpper = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }})

 const options = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}


const getOptions = [
  function upperCase() {
    return options.upperCase[Math.floor(Math.random() * options.upperCase.length)];
  },
  function lowerCase() {
    return options.lowerCase[Math.floor(Math.random() * options.lowerCase.length)];
  },
  function number() {
    return options.numeric[Math.floor(Math.random() * options.numeric.length)];
  },
  function symbol() {
    return options.symbol[Math.floor(Math.random() * options.symbol.length)];
  }
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
