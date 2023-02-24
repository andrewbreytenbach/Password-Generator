
// Add event listener to generate button. I didn't need the var generateBtn = document.querySelector("#generate"); that came with the starter code if I wrote it this way. 
var generatedPassword = document.getElementById("generate").addEventListener("click", function() {

  var passwordPrompt = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128 characters.");
  
  // This will end the series of prompts if nothing was entered into the text box that meets the criteria. 
  if (passwordPrompt === null) {
    return;
  }
  
  // This uses an if statement to enforce password length between 8 and 128 characters.
  if (passwordPrompt < 8 || passwordPrompt > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128 characters.");
    return;
  }

  // This creates an array that will later be plugged into a randomized function to create the random password. 
  var passwordCharacters = []
  
  // This creates a variable that determines whether or not an upperCase option should be used in the password via an if statement. 
  var upperCaseOption = confirm("Would you like to include uppercase characters in your password?");
  if (upperCaseOption) {
    passwordCharacters = passwordCharacters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  }
  
  // This creates a variable that determines whether or not a lowerCase option should be used in the password via an if statement. 
  var lowerCaseOption = confirm("Would you like to include lowercase characters in your password?");
  if (lowerCaseOption) {
    passwordCharacters = passwordCharacters.concat("abcdefghijklmnopqrstuvwxyz".split(""));
  }
  
  // This creates a variable that determines whether or not a numeric option should be used in the password via an if statement. 
  var numericCaseOption = confirm("Would you like to include numeric characters in your password?");
  if (numericCaseOption) {
    passwordCharacters = passwordCharacters.concat("0123456789".split(""));
  }
  
  // This creates a variable that determines whether or not a symbol option should be used in the password via an if statement. 
  var symbolCaseOption = confirm("Would you like to include symbol characters in your password?");
  if (symbolCaseOption) {
    passwordCharacters = passwordCharacters.concat(' !"\\#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~'.split(""));

  
  // This adds a check to see if at least one character set from among the four options was selected.
  if (finalPassword.length === 0) {
    alert("Please select at least one character set.");
    return;
  }

  // This stores the newPassword variable after randomly assigning a list of the items from the array and the preceding if statements.
  var newPassword = " "
  for (var i = 0; i < passwordPrompt; i++) {
    newPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  // This stores the newPassword from the previous for statement and inserts it into the HTML file by using the document selector option. 
  var passwordText = document.querySelector("#password");
    passwordText.value = newPassword

  }})

