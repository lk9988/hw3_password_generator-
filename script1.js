// Assignment Code
var generateBtn = document.querySelector("#generate");




// Declare a list of special characters 

var specialSet = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// console.log(specialSet); 
// why this one keep giving me error? got rid of some characters . \ gives me error... 


// Declare  a list of numeric characters 

var numberSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// Declare  a list of lowercase characters 
var lowerSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// Declare  a list of uppercase characters 
var upperSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Assignment Code / code generator button 
var generateBtn = document.querySelector("#generate");

 



//  generateBtn is clicked, prompt asking - 

function generatePassword() {



//prompting the user for a passwordlength

  var passwordLength = prompt('How many characters would you like your password to contain? choose a number between 8 and 128 ! '); 

  
// if not (passwordLength>=8 && passwordLength<=128) 
if (!(passwordLength >= 8 && passwordLength <= 128)){

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
var isUsingNumbers = confirm ('Use Numbers in your password?'); 
if (isUsingNumbers == true){
    charactersToUse = charactersToUse.concat(numberSet); 
}


// confirm if the password generator 'isUsingSpecial'

// IF 'isUsingSpecial'
// Then push 'specialSet' into charactersToUSe' List 
// and Append on random number from the 'specialSet' list 

var isUsingSpecial = confirm('Use Special Characters to you password'); 

if (isUsingSpecial == true){

    charactersToUse = charactersToUse.concat(specialSet);     
}



// confirm if the password generator 'isUsingUpper'
// IF 'isUsingUpper'
// Then push 'uppercase'into 'charactersToUSe' List 
// and Append on random number from the 'numbers' list 
 
var isUsingUpper = confirm ('Use UPPER-CASE in your password?'); 
if (isUsingUpper == true){
    charactersToUse = charactersToUse.concat(upperSet); 
}



// confirm if the password generator 'isUsingLower'
// IF 'isUsingLower'
// Then push 'lowercase '  into 'charactersToUSe' List 
// and Append on random number from the 'numbers' list 

var isUsingLower= confirm ('Use lower-case in your password?'); 
if (isUsingLower == true){
    charactersToUse = charactersToUse.concat(lowerSet); 
}

 //check if user selects nothing 



if ( !isUsingNumbers && !isUsingSpecial && !isUsingUpper && !isUsingLower ) { 

  alert('Please select options'); 
  

  return; 
 }






//while password.length , passwordLength

while (password.length < passwordLength) { 


  // Select 'randomCharacter' a character from 'charactersToUse'
    var randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)]; 
  
  // Append 'randomCharacter' to 'password' string 

  password += randomCharacter; 



}
console.log(charactersToUse); 
// Select Random characters from newlist characterstoUsefor 'password'

// return'password'
return password; 
}



// Write password to the #password input
function writePassword() {

  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// this is call back function - will only run then clicked
generateBtn.addEventListener("click", writePassword);


