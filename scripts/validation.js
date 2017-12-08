
function validate() {
    
    // Email and Password variables.
    var email = document.myForm.Email.value;
    var password = document.myForm.Password.value;
    
    
    //Check to make sure that Email and Password are filled out.
    if (email == "") {
        alert("Please enter your email address");
        email.focus();
    }
    if (password == "") {
        alert("You enter your password.");
        password.focus();
    }
    
    //Check to make sure that Email and Password are entered correctly.
    if (email != "blank@mail.com") {
        alert("You entered the wrong email address.");
        email.focus();
    }
    if (password != "password") {
        alert("You entered the wrong password.");
        password.focus();
    }
    else {
        alert("You logged in correctly!");
        
        var link = document.getElementById("redirect");
        
        link.style.visibility = "visible";
    }
}





