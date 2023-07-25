


function submitForm(){
    if (!document.getElementById("email").checkValidity()) {
        document.getElementById("error-msg").innerHTML ="Valid Email Required";
    }
    else{
        if(typeof(localStorage) != "undefined"){
            localStorage.name = document.getElementById("email").value;
        }
        document.getElementById("form").submit();
    }
    
    
  
}



function setData(){
    if(typeof(localStorage) != "undefined"){
        document.getElementById("unique").innerHTML = localStorage.name;
    }
}
