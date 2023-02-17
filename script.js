// password length provided by prompt
let lowercaseString = "abcdefghijklmnopqrstuvwxyz"
let uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let specialCharString = "!@#$%^&*()"
let numberString = "1234567890"


// Ask user for password options
function passwordSelection() {
  // Length of password.
  let passwordLength = parseInt(
    prompt('What would you like the Length of password to be?')
  );

  // checks to see if password length is between 8 & 126, and notifies user of necessary criteria.
if (passwordLength < 8 || passwordLength > 127) {
    alert('Password length must be provided as a number greater than 8 and less than 127.')
  }

  let includesSpecialChar = confirm(
    'Click OK to include special characters, if not press cancel.'
  );

  let includesNumber = confirm(
    'Click OK to confirm including numeric characters, if not press cancel.'
  );

  let includesLowercase = confirm(
    'Click OK if you would like to include lower case letters, if not press cancel.'
  );

  let includesUppercase = confirm(
    'Click OK to confirm you would like uppercase charaters, if not press cancel.'
  );

// Ensures user is selecting at least one of the criteria needed in order to generate a password.
  if (
    includesSpecialChar === false &&
    includesNumber === false &&
    includesLowercase === false &&
    includesUppercase === false
  ) {
    alert('Please select at least one character.');
  }

  // Storage for users password.
   let passwordSelection = {
    passwordLength: passwordLength,
    includesSpecialChar: includesSpecialChar,
    includesNumber: includesNumber,
    includesUppercase: includesUppercase,
    includesLowercase: includesLowercase,
  };

  return passwordSelection;
}

// Generating random element for password. 
//Input Math floor to make sure password doesn't obtain decimal.
function getRandom(arr) {
   let randomIndex = Math.floor(Math.random() * arr.length);
   let randomElement = arr[randomIndex];

  return randomElement;
}
// This function generates the password after user selects their necessary criteria. 
function generatePassword() {
 let options = passwordSelection();

  // Stores password.
   let result = [];
  
   // Stores character types to include in password.
  let possibleCharacters = [];
  let appliedCharacters = [];

// Adds potential special characters into password.
 if (options.includesSpecialChar) {
   possibleCharacters = possibleCharacters.concat(specialCharString);
   appliedCharacters.push(getRandom(specialCharString));
 }

// Adds potential numbers into password.
 if (options.includesNumber) {
   possibleCharacters = possibleCharacters.concat(numberString);
   appliedCharacters.push(getRandom(numberString));
 }

 // Adds potential lower caseletters into password.
 
 if (options.includesLowercase) {
   possibleCharacters = possibleCharacters.concat(lowercaseString);
   appliedCharacters.push(getRandom(lowercaseString));
 }

 // Adds potential uppercase letters into password.

 if (options.includesUppercase) {
   possibleCharacters = possibleCharacters.concat(uppercaseString);
   appliedCharacters.push(getRandom(uppercaseString));
 }

// For loop to generate password that will be generated witihn user's selected criteria. 
 for (i = 0; i < appliedCharacters.length; i++) {
  let possibleCharacter = getRandom(possibleCharacters);

   result.push(possibleCharacter);
 }
 return result.join('');
}

let generateBtn = document.querySelector('#generate');

function writePassword() {
 let password = generatePassword();
 let passwordText = document.querySelector('#password');

 passwordText.value = password;
}

// Generates functioning button.
generateBtn.addEventListener('click', writePassword);