// -----NAVBAR PAGE  -------

const hamburger = document.getElementById("hamburger")
const navMobile = document.getElementById("nav-mobile")

hamburger.addEventListener("click", ()=>{
    navMobile.classList.toggle("nav-list-mobile")
    // console.log(navMobile)
})

// -----NAVBAR PAGE END -------


// ----- VALIDATION PAGE / SUBS -------
function validateName(name_Valid){
    return /\d/.test(name_Valid);
}

function validatePhone(phone_Valid){
    return /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone_Valid);
}

function validateEmail(email_valid){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email_valid);
}

let submitButton= document.getElementById("submit-button")
submitButton.addEventListener("click", ()=>{
    event.preventDefault()

    let varError=0

    // FULL NAME
    let nameValidaton=document.getElementById("nameValidation").value
    let errorValidation_name=document.getElementById("invalid-name")

    if(nameValidaton.length==0){
        varError=1
        errorValidation_name.innerHTML="Please Enter Your Full Name!"
        errorValidation_name.style.display="block"
        errorValidation_name.style.color="red"
        document.getElementById("nameValidation").style.border="2px solid red"
    }else if(nameValidaton.length<3){
        varError=1
        alert("Name Minimal 3 Character!")
        errorValidation_name.innerHTML="Please Enter Your Full Name!"
        errorValidation_name.style.display="block"
        errorValidation_name.style.color="red"
        document.getElementById("nameValidation").style.border="2px solid red"
    }else if(validateName(nameValidaton)){
        varError=1
        alert("Name Invalid! (No Numbers Allowed)")
        errorValidation_name.innerHTML="Please Enter Your Full Name Correctly!"
        errorValidation_name.style.display="block"
        errorValidation_name.style.color="red"
        document.getElementById("nameValidation").style.border="2px solid red"
    }else{
        errorValidation_name.innerHTML=""
        errorValidation_name.style.display="none"
        document.getElementById("nameValidation").style.border="2px solid green"
    }

    
    // EMAIL
    let emailValidaton=document.getElementById("emailValidation").value
    let errorValidation_email=document.getElementById("invalid-email")

    if(emailValidaton.length==0){
        varError=1
        errorValidation_email.innerHTML="Please Enter Your Email Address!"
        errorValidation_email.style.display="block"
        errorValidation_email.style.color="red"
        document.getElementById("emailValidation").style.border="2px solid red"
    }else if(!validateEmail(emailValidaton)){
        varError=1
        alert("Email Address Invalid! (Email Must Contain \"@anymail\" and \".com\")")
        errorValidation_email.innerHTML="Please Enter Your Email Address!"
        errorValidation_email.style.display="block"
        errorValidation_email.style.color="red"
        document.getElementById("emailValidation").style.border="2px solid red"
    }else{
        errorValidation_email.innerHTML=""
        errorValidation_email.style.display="none"
        document.getElementById("emailValidation").style.border="2px solid green"
    }


    // NOMOR TELEPON
    let phoneValidaton=document.getElementById("phoneValidation").value
    let errorValidation_phone=document.getElementById("invalid-phone")

    if(phoneValidaton.length==0){
        varError=1
        errorValidation_phone.innerHTML="Please Enter Your Phone Number!"
        errorValidation_phone.style.display="block"
        errorValidation_phone.style.color="red"
        document.getElementById("phoneValidation").style.border="2px solid red"
    }else if(phoneValidaton.length<10){ // 
        varError=1
        alert("Phone Number Digit Minimal 10 Numbers!")
        errorValidation_phone.innerHTML="Please Enter Your Phone Number Correctly!"
        errorValidation_phone.style.display="block"
        errorValidation_phone.style.color="red"
        document.getElementById("phoneValidation").style.border="2px solid red"
    }else if(!validatePhone(phoneValidaton)){
        varError=1
        alert("Phone Invalid! (No Characters Allowed)")
        errorValidation_phone.innerHTML="Please Enter Your Phone Number Correctly!"
        errorValidation_phone.style.display="block"
        errorValidation_phone.style.color="red"
        document.getElementById("phoneValidation").style.border="2px solid red"
    }else{
        errorValidation_phone.innerHTML=""
        errorValidation_phone.style.display="none"
        document.getElementById("phoneValidation").style.border="2px solid green"
    }


    // let prefValidation= document.getElementsByName("radiocheck")
    // console.log(prefValidation)
    var prefValidation = document.getElementsByName("radiocheck")
    var result=false;
    let errorValidation_pref=document.getElementById("invalid-pref")

    for(var i=0 ; i<prefValidation.length ; i++){
        if(prefValidation[i].checked){
            result=true;
            break;
        }
    }
    if(result==false){
        // alert("Choose Minimal 1 Preference")
        varError=1
        errorValidation_pref.innerHTML="Please Choose Preference!"
        errorValidation_pref.style.display="block"
        errorValidation_pref.style.color="red"
    }else{
        errorValidation_pref.innerHTML=""
        errorValidation_pref.style.display="none"
    }
    

    // AGREEMENT VALIDATION
    let agreementValidation=document.getElementById("agree")
    let errorValidation_agreement=document.getElementById("invalid-agree")

    if(!agreementValidation.checked){
        varError=1
        errorValidation_agreement.innerHTML="You Need to Checklist The Box!"
        errorValidation_agreement.style.display="block"
        errorValidation_agreement.style.color="red"
    }else{
        errorValidation_agreement.innerHTML=""
        errorValidation_agreement.style.display="none"
        // document.getElementById("agreementValidation").style.border="2px solid green"
    }

    // // subscribe
    // let subs=document.getElementById("submit-button")
    if(varError==0){
        alert("You Have Been Subscribed, Thankyou!")
    }
    
})
