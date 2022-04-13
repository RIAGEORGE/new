let email = document.getElementById("email");
let error = document.getElementById("error");
let password = document.getElementById("password");

function validate(){
   let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
   if(regexp.test(email.value)){
       error.innerHTML = "Valid";
       error.style.color = "green";
       return true;
   } 
   else{
    alert("You have entered an invalid email address!")
       error.innerHTML = "Invalid";
       error.style.color = "red";
      
       return false;
   }
    }
