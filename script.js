let new_password = ''
// let possibleCharacters = ''

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

  // checks to see ifpassword length is between 8 & 126.
if (passwordLength < 8 || passwordLength > 127) {
    alert('Password length must be provided as a number greater than 8 and less than 127.')
  }

  let includesSpecialCharString = confirm(
    'Click OK to include special characters, if not press cancel.'
  );

  let includesNumberString = confirm(
    'Click OK to confirm including numeric characters, if not press cancel.'
  );

  let includesLowercaseString = confirm(
    'Click OK if you would like to include lower case letters, if not press cancel.'
  );

  let includesUppercaseString = confirm(
    'Click OK to confirm you would like uppercase charaters, if not press cancel.'
  );

// Ensures user is selecting at least one of the criteria needed in order to generate a password.
  if (
    includesSpecialCharString === false &&
    includesNumericCharacters === false &&
    includesLowercaseString === false &&
    includesUppercaseString === false
  ) {
    alert('Please select at least one character.');
  }

  // Storage for users password.
   let passwordSelection = {
    passwordLength: passwordLength,
    includesSpecialCharString: includesSpecialCharString,
    includesNumberString: includesNumberString,
    includesUppercaseString: includesUppercaseString,
    includesUpperCasedCharacters: includesUpperCasedCharacters,
  };
}

// Generating random element for password. 
//Input Math floor to make sure password doesn't obtain decimal.
function getRandomPassword(arr) {
   randomizedIndex = Math.floor(Math.random() * arr.length);
   randomizedElement = arr[randomIndex];

  return randomElement;
}

// This function generates the password after user selects their necessary criteria. 
generatePassword() { 
  options = getRandomPassowrd();

// Stores password.
  result = [];

 // Stores character types to include in password.
  possibleCharacters = [];



