

const input = document.querySelector('#name-input');
const reflectionInput = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    reflectionInput.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        reflectionInput.textContent = 'Anonymous';
    }; 
});