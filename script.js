// Assignment code here

const DEFAULT_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 128;
const MIN_PASSWORD_LENGTH = 8;

const PASSWORD_CHARACTERS = {
  UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
  NUMBERS: "0123456789",
  SPECIAL: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

const passwordLengthHTMLInputField = document.querySelector("#password-length");
passwordLengthHTMLInputField.value = DEFAULT_PASSWORD_LENGTH;

function generatePassword() {
  // Get the HTML input field by using its id selector "#password-length"
  const passwordLengthHTMLInputField = document.querySelector(
    "#password-length"
  );

  // Set up the passwordLength variable which we will set to either be
  // from the input field, or fall back on the default value of DEFAULT_PASSWORD_LENGTH
  let passwordLength;

  // If the passwordLengthHTMLInputField has a value set, we use that value as passwordLength
  if (passwordLengthHTMLInputField.value) {
    const value = passwordLengthHTMLInputField.value;
    // We convert the value from the input field to a number, because it is a string
    const valueAsNumber = Number(value);
    passwordLength = valueAsNumber;
  }
  // Else we fallback on the default password length;
  else {
    passwordLength = DEFAULT_PASSWORD_LENGTH;
  }

  console.log("Password Length", passwordLength);

  if (passwordLength > MAX_PASSWORD_LENGTH)
    alert("Password must be 128 or less.");

  if (passwordLength < MIN_PASSWORD_LENGTH)
    alert("Password must be a minimum of 8 or more.");

  let passwordCharacters = "";

  const allowUppercaseHTMLInputField = document.querySelector(
    "#allow-uppercase"
  );

  const allowUppercaseCharacters = allowUppercaseHTMLInputField.checked;

  if (allowUppercaseCharacters) {
    passwordCharacters = passwordCharacters + PASSWORD_CHARACTERS.UPPERCASE;
  }

  const allowLowercaseHTMLInputField = document.querySelector(
    "#allow-lowercase"
  );

  const allowLowercaseCharacters = allowLowercaseHTMLInputField.checked;

  if (allowLowercaseCharacters) {
    passwordCharacters = passwordCharacters + PASSWORD_CHARACTERS.LOWERCASE;
  }

  // FINISH CODE HERE

  const totalCharacterLength = passwordCharacters.length;
  console.log("Total Character Length", totalCharacterLength);
  let password = "";

  // Loop through the password characters N number of times to select
  // a random character for each position in the password
  for (let i = 0; i < passwordLength; i++) {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    console.log("Random Number", randomNumber);
    // Multiply that number by the number of characters we can use in our password
    // in order to get a value between 0 and that total character count.
    // For example, if we had 26 letters of the alphabet, we'll get a number between
    // 0 and 26 by multiplying the randomNumber by 26, but note that it will not be an
    // integer, it will have numbers after the decimal (so it can't be used as an index in
    // a string yet).
    const randomNumberBetweenZeroAndCharacterLength =
      randomNumber * totalCharacterLength;
    console.log(
      "Random Number Between Zero and Character Length",
      randomNumberBetweenZeroAndCharacterLength
    );
    // We turn the randonmNumberBetweenZeroAndCharacterLength into an integer by callig
    // Math.floor on it, which will round it down to the nearest integer.
    // For example 9.32432432 would become 9. Now it can be used to reference
    // a position in a string as an index.
    const randomLetterIndex = Math.floor(
      randomNumberBetweenZeroAndCharacterLength
    );
    console.log("Random Letter Index", randomLetterIndex);

    // Get the letter by referencing the letter at randomLetterIndex position
    // in the list of possible characters for the password. Again, if randomLetterIndex
    // is 9, we would get the 10th letter in passwordCharacters by doing passwordCharacters[9],
    // or in this case, passwordCharacters[randomLetterIndex];
    // passwordCharacters[randomLetterIndex];

    const randomLetter = passwordCharacters[randomLetterIndex];
    console.log("Random Letter", randomLetter);

    // Add the random letter we just generated to the "password" string
    password = password + randomLetter;
  }

  console.log("OUR PASSWORD IS:", password);

  return password;
}

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
