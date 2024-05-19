let firstInput = document.querySelector(".first-section-input");
let errorMsgTop = document.querySelector(".error-msg-1");
// console.log("working");

function emailValidate(){
    if(firstInput.value === ""){
        errorMsgTop.textContent = "";
    } else if(!firstInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMsgTop.textContent = "Please check your email";
        firstInput.style.borderColor = "red";
        return false;
    }
    errorMsgTop.textContent = "";
    firstInput.style.borderColor = "";
    return true;
}


// FOOTER FORM EMAIL VALIDATION
let footerInput = document.querySelector(".input-fourth-sctn");
let errorMsgFooter = document.querySelector(".error-msg");

function emailValidateFooter(){
    if(footerInput.value === ""){
        errorMsgFooter.textContent = "";
    } else if(!footerInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMsgFooter.textContent = "Please check your email";
        footerInput.style.borderColor = "red";
        return false;
    }
    errorMsgFooter.textContent = "";
    footerInput.style.borderColor = "";
    return true;
}
