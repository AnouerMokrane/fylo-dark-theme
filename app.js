let submitBtn = document.querySelector('.cta .btn');
let input =document.querySelector(".cta input");
let errMsg = document.querySelector(".cta .form .err-msg")

let regx = /^[a-zA-Z]+@[a-zA-Z]+\.com/

submitBtn.addEventListener("click",(e)=>{ 
    if(!input.value.match(regx)) {
        errMsg.textContent ="Please enter a valid email address"
       e.preventDefault()
    } 
})

