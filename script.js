
// Add event listener to generate button. I didn't need the var generateBtn = document.querySelector("#generate"); that came with the starter code if I wrote it this way. 
var generatedPassword = document.getElementById("generate").addEventListener("click", function() {

  var passwordPrompt = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128 characters.");
  
  // This will end the series of prompts if nothing was entered into the text box that meets the criteria. 
  if (passwordPrompt === null) {
    return;
  }
  
  // This creates an array that will later be plugged into a randomized function to create the random password. 
  var passwordCharacters = []
  
  //
  var upperCaseOption = confirm("Would you like to include uppercase characters in your password?");
  if (upperCaseOption) {
    passwordCharacters = passwordCharacters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  }
  
  //
  var lowerCaseOption = confirm("Would you like to include lowercase characters in your password?");
  if (lowerCaseOption) {
    passwordCharacters = passwordCharacters.concat("abcdefghijklmnopqrstuvwxyz".split(""));
  }
  
  //
  var numericCaseOption = confirm("Would you like to include numeric characters in your password?");
  if (numericCaseOption) {
    passwordCharacters = passwordCharacters.concat("0123456789".split(""));
  }
  
  //
  var symbolCaseOption = confirm("Would you like to include symbol characters in your password?");
  if (symbolCaseOption) {
    passwordCharacters = passwordCharacters.concat("!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split(""));

  //
  var newPassword = " "
  for (var i = 0; i < passwordPrompt; i++) {
    newPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  //
  var passwordText = document.querySelector("#password");
    passwordText.value = newPassword

  }})

