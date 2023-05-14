var popup = document.getElementById('popup');
var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validation(){
    if(document.FormFill.Username.value == ""){
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    }
    else if(document.FormFill.Username.value.length < 5){
        document.getElementById("result").innerHTML = "Username must contain 5 characters*";
        return false;
    }
    else if(document.FormFill.Email.value == ""){
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    }
    else if(!document.FormFill.Email.value.match(mailformat)){
        document.getElementById("result").innerHTML = "Enter correct Email*";
        return false;
    }
    else if(document.FormFill.Password.value == ""){
        document.getElementById("result").innerHTML = "Enter  your password*";
        return false;
    }
    else if(document.FormFill.Password.value.length < 5){
        document.getElementById("result").innerHTML = "Password must contain 5 digit*";
        return false;
    }
    else if(document.FormFill.CPassword.value == ""){
        document.getElementById("result").innerHTML = "Enter confirm password*";
        return false;
    }
    else if(document.FormFill.CPassword.value !== document.FormFill.Password.value){
        document.getElementById("result").innerHTML = "Password does'nt matched*";
        return false;
    }
    else if(document.FormFill.Password.value == document.FormFill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}

function closeSlide(){
    popup.classList.remove("open-slide")
}