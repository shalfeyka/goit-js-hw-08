import '../css/03-feedback.css'
import throttle from "lodash.throttle";



const form = document.querySelector('form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', submitFeedBack);

const storageKey = "feedback-form-state";
let formData = {

};

ifLocalStorageEmpty();

function onInput(evt) {

    evt.preventDefault();
    formData [evt.target.name] = evt.target.value;
    console.log(formData);
    localStorage.setItem(storageKey,JSON.stringify(formData));

}

function ifLocalStorageEmpty() {

const saveData = JSON.parse(localStorage.getItem(storageKey));

if (saveData) {
    feedBackForm.email.value = saveData.email;
    feedBackForm.message.value = saveData.message;
    }
}

function submitFeedBack(evt) {
    evt.preventDefault();
    const formEmpty = feedBackForm.email.value === "" || feedBackForm.message.value === ""
    
    if(formEmpty){         
        return;     
    }  
}