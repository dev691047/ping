// alert("sdvnre");
// const Email = document.querySelector('#input');
// const Form=document.querySelector('.form-input');
// const button=document.querySelector('#btn');
// let inputValue = Email.value;

// button.addEventListener('click',function(e){
//     // prevent send the value
//     e.preventDefault();
//     if(Email.value===''){
//         console.log("dev");

//     }

const formButton = document.getElementById('btn');
const formInput = document.getElementById('email');
const formLabel = document.getElementById('error');
const error1= "Whoops! It looks like you forgot to add your email";
const error2= "Please provide a valid email address";


formButton.addEventListener('click', (evt)=>{
    evt.preventDefault();
    re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!formInput.value.match(re) || !formInput.value){
        formLabel.innerHTML=error2;
        formInput.classList.add('invalid');
        formLabel.classList.add('invalid');

        if(!formInput.value){
            formLabel.innerHTML=error1;
        }
    }
    else{
        formInput.classList.remove('invalid');
        formLabel.classList.remove('invalid');
        formLabel.innerHTML='';
 


        alert('Successfully Submitted!')
    }

    
})