
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// this is call back function - will only run then clicked
generateBtn.addEventListener("click", writePassword);

// Declare a list of special characters 

// var specialSet = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "/", "{", "|", "}", "~" ]; 
// console.log(specialSet); 
// why this one keep giving me error? 


// Declare  a list of numeric characters 

var numberSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// Declare  a list of lowercase characters 
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// Declare  a list of uppercase characters 
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Assignment Code / code generator button 
var generateBtn = document.querySelector("#generate");

var password; 



//  generateBtn is clicked, prompt asking - 

function generatePassword() {

//prompting the user for a passwordlength

  var passwordLength = prompt('How many characters would you like your password to contain? choose a number between 8 and 128 ! '); 

  
// if not (passwordLength>=8 || passwordLength<=128) 
if (!(passwordLength>=8 || passwordLength <=128)){

  // then Alert to the user that they need to provide a corrent length
  alert('invalid choice! please select a number between 8 ~ 128.');


  // and exit function
  return; 
}


// Declare a new list of charcterToUse

var charactersToUse = []; 

// declare a new 'password' string 
var password = ""; 


// confirm if the password generator 'isUsingNumbers'

// IF 'isUsingNumbers'
// Then push 'numbers'inton 'charactersToUSe' List 
// and Append on random number from the 'numbers' list 


// confirm if the password generator 'isUsingSpecial'

// IF 'isUsingSpecial'
// Then push 'special' into charactersToUSe' List 
// and Append on random number from the 'numbers' list 




// confirm if the password generator 'isUsingUpper'
// IF 'isUsingUpper'
// Then push 'uppercase'into 'charactersToUSe' List 
// and Append on random number from the 'numbers' list 




// confirm if the password generator 'isUsingLower'
// IF 'isUsingLower'
// Then push 'lowercase '  into 'charactersToUSe' List 
// and Append on random number from the 'numbers' list 


// If not 'charactersToUse.length'
// then aleart to the user that they need to provide a correct length 
//and exit function 



// for i = 0; continue as long as i < passwordLength; i++ 
// for (var i = 0; i < passwordLength; i++) {




//while password.length , passwordLength

while (password.length < passwordLength) { 


  // Select 'randonCharacter' a character from 'charactersToUse'
  // Append 'randomCharacter' to 'password' string 


// Return 'password' 
}
return password; 
}



