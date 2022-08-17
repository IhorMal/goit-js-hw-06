
const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formElm = event.currentTarget.elements;

    if (formElm.email.value === '' || formElm.password.value === '') {
        alert('Всі поля повинні бути заповнені')
    }

   const formInfo = {
        email: formElm.email.value,
        password: formElm.password.value,
   }
    
    console.log(formInfo)
    event.currentTarget.reset();
})