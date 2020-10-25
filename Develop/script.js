
// 1. when generate password button clicked, 

// 2. ask / setting password length / should be 9 < length < 129

//  generateBtn is clicked, prompt asking - 



// var passwordLength = prompt('How many characters would you like your password to contain? choose a number between 8 and 128 ! ');


// set passwordLength 

// if passwordLength < 8 and >128 -> alert ("invalid choice !") 



// 3. option - special characters

// 4. option - numeric characters

// 5. option - uppercase characters 

// 6. generate random password based on user's answer 

// 7. disply generated password 


// var specialSet = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "/", "{", "|", "}", "~" ]; 
// console.log(specialSet); 
// why this one keep giving me error? 


var numberSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Assignment Code / code generator button 
var generateBtn = document.querySelector("#generate");




//  generateBtn is clicked, prompt asking - 

function settinglength() {

//prompting / setting password length 

  var passwordLength = prompt('How many characters would you like your password to contain? choose a number between 8 and 128 ! '); 

// if passwordLength < 8 and >128 -> alert ("invalid choice !") stop and exit 
 if (passwordLength < 8 || passwordLength > 128) {

  alert('invalid choice! please select a number between 8 ~ 128.');

  return; 

 }



}



// set passwordLength 

// if passwordLength < 8 and >128 -> alert ("invalid choice !") 







// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}






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
