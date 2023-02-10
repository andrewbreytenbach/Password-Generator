
// Add event listener to generate button. I didn't need the var generateBtn = document.querySelector("#generate"); that came with the starter code if I wrote it this way. 
var generatedPassword = document.getElementById("generate").addEventListener("click", function() {
  var passwordPrompt = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128 characters.");
  
  if (passwordPrompt === null) {
    return;
  }
// This creates an arrg 
var passwordCharacters = [];

var upperCaseOption = confirm("Include uppercase characters in your password?");
if (upperCaseOption) {
  passwordCharacters = passwordCharacters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
}

})