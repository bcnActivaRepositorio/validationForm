// ELECTING ALL TEXT ELEMENTS
let username = document.forms['vform']['username'];
let myMail   = document.forms['vform']['email'];
let myPhone  = document.forms['vform']['tel'];
let myPass   = document.forms['vform']['myPass'];
let rePass   = document.forms['vform']['myRepeat'];



//SELECTING ALL ERROR DISPLAY ELEMENTS
let name_error    = document.getElementById('name_error');
let mail_error    = document.getElementById('email_error');
let tel_error     = document.getElementById('tel_error');
let pass_error    = document.getElementById('pass_error');
let repeat_error  = document.getElementById('repeat_error');



//SETTING ALL EVENT LISTENERS
username.addEventListener('change', nameVerify);
myMail.addEventListener('change', mailVerify);
myPhone.addEventListener('change', phoneVerify);
myPass.addEventListener('change', passVerify);
rePass.addEventListener('change', rePassVerify);

//checks
const RE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BLAH = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
const LETTERS = /^[a-z][\d_\s,.]+$/i;
//let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
let strongRegex = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/);
let boleano = false;

//Validation function
function Validate() {
  // clean me

  /* let validador = true;
  // validate username
  if (username.value.length == 0) {  
    username.style.border = "1px solid red";
    name_error.style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    validador = false;

  } else if (username.value.length < 3) {
    username.style.border = "1px solid red";
    name_error.style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    validador = false;

  } else if (!LETTERS.test(username.value)){
    username.style.border = "1px solid red";
    name_error.style.color = "red";
    name_error.textContent = "Username must start with a letter";
    username.focus();
    validador = false;

  } else {
    username.style.border = "1px solid green";
    name_error.style.color = "green";
    name_error.textContent = "Username OK";
    username.focus();
    validador = true;
  }
  //validate password
  if (myPass.value.length == 0) {  
    myPass.style.border = "1px solid red";
    pass_error.style.color = "red";
    pass_error.textContent = "Password is required";
    myPass.focus();
    validador = false;

  }

  //validate re-pass
  if (myPass.value !== rePass.value){
    rePass.style.border = "1px solid red";
    repeat_error.style.color = "red";
    repeat_error.textContent = "Password is required to match";
    rePass.focus();
    validador = false; 
  } else if (rePass.value.length == 0){
    rePass.style.border = "1px solid red";
    repeat_error.style.color = "red";
    repeat_error.textContent = "Empty Field!!";
    rePass.focus();
    validador = false
  } else if (myPass.value === rePass.value){
    rePass.style.border = "1px solid green";
    repeat_error.style.color = "green";
    repeat_error.textContent = "Password match";
    rePass.focus();
    validador = true; 
  } 

  //Validate mail
  if (myMail.value.length == 0) {
    myMail.style.border = "1px solid red";
    mail_error.style.color = "red";
    mail_error.textContent = "Mail is required";
    myMail.focus();
    validador = false;
  } else if (!RE.test(myMail.value)) {
    myMail.style.border = "1px solid red";
    mail_error.style.color = "red";
    mail_error.textContent = "Mail form not correct";
    myMail.focus();
    validador = false;
  }

  //Phone validation
  if (myPhone.value.length == 0){
    myPhone.style.border = "1px solid red";
    tel_error.style.color = "red";
    tel_error.textContent = "Phone number is required";
    myPhone.focus();
    validador = false;
  }else if (!BLAH.test(myPhone.value)) {
    myPhone.style.border = "1px solid red";
    tel_error.style.color = "red";
    tel_error.textContent = "Phone number not correct!";
    myPhone.focus();
    validador = false;
  }
  return validador; */
boleano = false;
  //one ring to rule them all
  let functOne   = nameVerify();
  let functTwo   = passVerify();
  let functThree = rePassVerify();
  let functFour  = phoneVerify();
  let functFive  = mailVerify();
  
  //you'll tell me the true
  ((functOne) && (functTwo) && (functThree) && (functFour) && (functFive)) ? boleano = false : boleano = true;
  
  return boleano;
}

//Event handler functions
//NAME
function nameVerify() {
  console.log('NAME WORKS');  
  boleano = false;
  if (username.value.length == 0) {
   username.style.border = "1px solid red";
   name_error.style.color = "red";
   name_error.innerHTML = "No empty fields"; 
   boleano = true;
  } else if (username.value.length < 3) {
    username.style.border = "1px solid red";
    name_error.style.color = "red";
    name_error.innerHTML = "Username too short"; 
    boleano = true;
  } else if (!LETTERS.test(username.value)) {
    username.style.border = "1px solid red";
    name_error.style.color = "red";
    name_error.innerHTML = "Username MUST start with a letter"; 
    boleano = true;
   } else {
    username.style.border = "1px solid green";
    name_error.style.color = "";
    name_error.textContent = "";
    boleano = false;
  }
  return boleano;
}
//MAIL
function mailVerify(){
  console.log('mail works');
  //you'lltell me the true
  boleano = false;
  if ((myMail.value == "")) {
    myMail.style.border = "1px solid red";
    mail_error.style.color = "red";
    mail_error.innerHTML = "No empty fields"; 
    boleano = true;
  } else if (!RE.test(myMail.value)) {
    myMail.style.border = "1px solid red";
    mail_error.style.color = "red";
    mail_error.innerHTML = "Playing dumbo?"; 
    boleano = true;
  } else {
    myMail.style.border = "1px solid green";
    mail_error.style.color = "";
    mail_error.innerHTML = ""; 
    boleano = false;
  }
  return boleano;
}
//PHONE
function phoneVerify(){
  console.log('phone works');
    //you'lltell me the true
    boleano = false;
 
    if (myPhone.value == "") {
      myPhone.style.border = "1px solid red";
      tel_error.style.color = "red";
      tel_error.innerHTML = "No empty fields"; 
      boleano = true;
    } else if (!BLAH.test(myPhone.value)){
      myPhone.style.border = "1px solid red";
      tel_error.style.color = "red";
      tel_error.innerHTML = "No proper phone number"; 
      boleano = true;
    } else {
      myPhone.style.border = "1px solid green";
      tel_error.style.color = "";
      tel_error.innerHTML = ""; 
      boleano = false;
    }
return boleano;
}
//PASSWORD
function passVerify(){
  console.log('pass works');
  boleano = false;

  if (myPass.value == "") {
    myPass.style.border = "1px solid red";
    pass_error.style.color = "red";
    pass_error.innerHTML = "No empty fields"; 
    boleano = true;
  } else if (!strongRegex.test(myPass.value)) {
    myPass.style.border = "1px solid red";
    pass_error.style.color = "red";
    pass_error.innerHTML = "One Upper/lower/number & 5 characters min"; 
    boleano = true;
  } else {
    myPass.style.border = "1px solid green";
    pass_error.style.color = "green";
    pass_error.innerHTML = ""; 
    boleano = false;
  }
  return boleano;
}
//REPASS
function rePassVerify(){
console.log('repass works');
  if (rePass.value !== myPass.value) {
  rePass.style.border = "1px solid red";
  repeat_error.style.color = "red";
  repeat_error.innerHTML = "Password doesn't match"; 
  boleano = true;
} else if (rePass.value == 0) {
  rePass.style.border = "1px solid red";
  repeat_error.style.color = "red";
  repeat_error.innerHTML = "No empty fields"; 
  boleano = true;
} else {
  rePass.style.border = "1px solid green";
  repeat_error.style.color = "green";
  repeat_error.innerHTML = "Password match"; 
  boleano = false;
}
return boleano;
}
