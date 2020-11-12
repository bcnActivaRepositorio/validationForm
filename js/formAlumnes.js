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


//Validation function
function Validate() {
  // clean me

  let validador = true;
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
  return validador;
}

//Event handler functions
function nameVerify() {
  let boleano = false;
  if (username.value.length >= 3) {
   username.style.border = "1px solid green";
   name_error.style.color = "#0ec771";
   name_error.innerHTML = ""; 
   boleano = true;
  }
  return boleano;
}

function mailVerify(){
  console.log('mail works');
  //you'lltell me the true
  let boleano = false;
 
  if (RE.test(myMail.value)) {
    myMail.style.border = "1px solid #5e6e66";
    mail_error.style.color = "#0ec771";
    mail_error.innerHTML = ""; 
    boleano = true;
  }
}
function phoneVerify(){
  console.log('phone works');
    //you'lltell me the true
    let boleano = false;
 
    if (BLAH.test(myMail.value)) {
      myPhone.style.border = "1px solid #5e6e66";
      tel_error.style.color = "#0ec771";
      tel_error.innerHTML = ""; 
      boleano = true;
    }

}

function passVerify(){
  
}
function rePassVerify(){

}

