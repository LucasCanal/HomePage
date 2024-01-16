let form = document.getElementById('email-box');
let email = document.getElementById('email');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');

form.addEventListener('submit', (e) => {
    if(email.value == '') {
    } else if (validatorEmail(email.value) == true) {
        console.log(email.value)
        textForm.textContent = '';
        email.value = '';
    }


    e.preventDefault()
})

email.addEventListener("blur", () => {
    if(validatorEmail(email.value) !== true) {
        textForm.textContent = '';
    } else {
        textForm.textContent = '';
    }
})

function validatorEmail(email) {
    let emailPattern = /\S+@\S+\.\S+/
    return emailPattern.test(email)
}