function formValidation(){

    let name = document.getElementById("userName").value;
    let email=document.getElementById("userEmail").value;
    let subject=document.getElementById("subject").value;
    let message=document.getElementById("message").value;
    let phone=document.getElementById("userPhone").value;

    if(name=="" || email=="" || subject=="" || message=="" || phone=="")
    {
        alert("field can't be null")
    }
    else{
        event.preventDefault();
    }
    
}
function validMessage()
{
    let message=document.getElementById("message");
     if(message.value=="")
    {
        message.style.border= '2px solid red';    
        document.getElementById("msgError").innerHTML="can't be null";

    }
    else{
        
        message.style.border= '2px solid green';
        document.getElementById("msgError").innerHTML="";
    
    }

}
function validphone()
{
    document.getElementById("userPhone").setAttribute('type','Number');
    let phone=document.getElementById("userPhone");
    if(/^\(?([1-9]{1})\)?[-. ]?([0-9]{9})$/.test(phone.value)){
        phone.style.border= '2px solid green';
        document.getElementById("phoneError").innerHTML="";
        document.getElementById("userPhone").setAttribute('type','text');


    }
    else{
        phone.style.border= '2px solid red';
        document.getElementById("phoneError").innerHTML="please enter valid phone number";
    }

}
function validEmail()
{
    let email=document.getElementById("userEmail");

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        email.style.border= '2px solid green';
        document.getElementById("emailError").innerHTML="";
    }
    else 
    {
        email.style.border= '2px solid red';
        document.getElementById("emailError").innerHTML="Email Invalid";

    }
}
function validName()
{
    let name = document.getElementById("userName");

    if (/^[A-Za-z]+$/.test(name.value) && name.value.trim() != "") {
        name.style.border= '2px solid green';
        document.getElementById("nameError").innerHTML="";

    
    }
    else 
    {
        name.style.border= '2px solid red';
        document.getElementById("nameError").innerHTML="Name can not consist Numeric Value";

    }

}
function subjectValidate()
{
    let subject=document.getElementById("subject");

    if(subject.value>0)
    {
        subject.style.border= '2px solid green';
        document.getElementById("subjectError").innerHTML="";



    }
    else{
        subject.style.border= '2px solid red';
        document.getElementById("subjectError").innerHTML="please select the subject";
    }
   
}