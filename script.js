const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, 'necessary')
        }
    })

}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, repassword]);


});
