// Assignment code here
  var password = document.getElementById("password");
  var numbersArray= ['0', '1', '2', '3', '4', '5','6','7','8','9']
  var specialChar= ['!','@','#','$','%','^','&','*','(',')']
  var lowercaseArray= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var uppercaseArray= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var output=[];
  var passwordLength;
  var password = "";
// array 


var generateBtn = document.querySelector("#generate");
  function generatePassword() {
  // Conditions for password
  var passwordLength = prompt("How many characters do you want your password to be? NOTE: Must be between 8-128 characters.")
  if (passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8-128 characters")
  }else {
   var lowercase = confirm("Do you want lowercase characters in your password?");
  var uppercase = confirm("Do you want uppercase characters in your password?");
  var numbers = confirm("Do you want to add numbers characters in your password?");
  var specialChar = confirm("Do you want to add special characters in your password?");
  }
    
  console.log (lowercase, uppercase, numbers, specialChar)


  if (numbers){
    output = output.concat(numbersArray);
  }

  if (lowercase){
    output = output.concat(lowercaseArray);
  }

  if (uppercase){
    output = output.concat(uppercaseArray);
  }

  if (specialChar){
    output = output.concat(specialChar);
  }
  console.log(output)
// Loop
for(let i = 0; i < passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * output.length)
  password += output[randomNumber]

}
console.log(password)
return password;
// console.log(password)
// var passwordText = document.querySelector("#password");
//  passwordText.value = password;
// return password
}

// document.getElementById("password").value = password;

//  var finalPassword=""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


