let email = document.getElementById("email");
let contact_number = document.getElementById("contact numbers");
let password = document.getElementById("password");
function validate(){
    if(email.value==""){
        alert("Email caanot be empty");
        return false
    }
    else if(password.value==""){
        alert("Password cannot be empty");
        return false
    }
    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
}
function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }
