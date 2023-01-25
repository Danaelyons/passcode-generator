# passcode-generator

Got the HTML input field by using its id selector "#password-length".

 Set up the passwordLength variable which we will set to either be
 from the input field, or fall back on the default value of DEFAULT_PASSWORD_LENGTH.
 
 If the passwordLengthHTMLInputField has a value set, we use that value as passwordLength.
 
 We convert the value from the input field to a number, because it is a string.
 
 Else we fallback on the default password length.
 
 Looped through the password characters N number of times to select
 a random character for each position in the password.
 
 Multiply that number by the number of characters we can use in our password
 in order to get a value between 0 and that total character count.
 For example, if we had 26 letters of the alphabet, we'll get a number between
 0 and 26 by multiplying the randomNumber by 26, but note that it will not be an
 integer, it will have numbers after the decimal (so it can't be used as an index in
 a string yet).
 
 We turn the randonmNumberBetweenZeroAndCharacterLength into an integer by callig
 Math.floor on it, which will round it down to the nearest integer.
 For example 9.32432432 would become 9. Now it can be used to reference
 a position in a string as an index.
 
 Get the letter by referencing the letter at randomLetterIndex position
  in the list of possible characters for the password. Again, if randomLetterIndex
  is 9, we would get the 10th letter in passwordCharacters by doing passwordCharacters[9],
  or in this case, passwordCharacters[randomLetterIndex]
  passwordCharacters[randomLetterIndex].
  
  Add the random letter we just generated to the "password" string.
  
  
