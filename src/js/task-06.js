

const input = document.querySelector('#validation-input');

const length = input.getAttribute('data-length');

input.addEventListener('change', odValidationInput);


function odValidationInput(event) {

    if (event.currentTarget.value.length >= length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    };

    if (event.currentTarget.value.length < length) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    };
}