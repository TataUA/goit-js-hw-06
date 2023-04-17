const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {elements: { email, password }} = event.currentTarget;    
        
    if(!email.value || !password.value) {
        return alert(`Attention! All fields must be filled!`);
    }  

    const objData = {
        email: event.currentTarget.elements.name = email.value,
        password: event.currentTarget.elements.name = password.value,
    };
             
    console.log(objData);

    event.currentTarget.reset();
    }
   
   

