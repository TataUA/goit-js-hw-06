const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {elements: { email, password }} = event.currentTarget;    
    const objData = {
        email: event.currentTarget.elements.name = email.value,
        password: event.currentTarget.elements.name = password.value,
    };
    
    if(!email.value || !password.value) {
        return alert(`Attention! All fields must be filled!`);
    }  
             
    console.log(objData);

    event.currentTarget.reset();
    }
   
   

