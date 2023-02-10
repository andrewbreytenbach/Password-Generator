// Add event listener to generate button
document.getElementById("generate").addEventListener("click", function() {
  var passwordPrompt = prompt("How many characters would you like your password to have? Please enter a number between 8 and 32 characters.");
});

// Assignment code here
const passowrdCharacters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

// Function to generate the password
function generatePassword(length) {
  // Combine all possible characters into one string
  var passwordOptions = passwordCharacters.lowercase + passwordChar.uppercase + passwordChar.numberic + passwordCharacters.special;

  // Initialize an empty string to store the password
  var password = "";

  // Loop to generate the password
  for (let i = 0; i < length; i++) {
    // Choose a random index from the password options string
    let randomIndex = Math.floor(Math.random() * passwordOptions.length);

    // Add the character at the random index to the password
    password += passwordOptions[randomIndex];
  }

  // Return the generated password
  return password;
}

// Call the function with a desired password length
var passwordLength = passwordPrompt;
let generatedPassword = generatePassword(passwordLength);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


