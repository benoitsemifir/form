// récup des élems DOM input
const pseudoInput   = document.querySelector('input#pseudo')
const emailInput    = document.querySelector('input#email')
const passwordInput = document.querySelector('input#password')
const passwordConfirmInput = document.querySelector('input#passwordConfirm')

// récup les élems DOM alert
const pseudoAlert = document.querySelector('#alert_pseudo')
const emailAlert = document.querySelector('#alert_email')
const passwordAlert = document.querySelector('#alert_password')
const passwordConfirmAlert = document.querySelector('#alert_passwordConfirm')

// récup du bouton
const button = document.querySelector('button')
button.disabled = true;

// Vérif du pseudo
const verifPseudo = () => {
    if(pseudoInput.value){
        pseudoAlert.classList.add('hidden')
        return true;
    }else{
        pseudoAlert.classList.remove('hidden')
        return false;
    }
}

// Verif Email
const verifEmail = () => {
    let regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regExp.test(emailInput.value)){
        emailAlert.classList.add('hidden');
        return true;
    }else{
        emailAlert.classList.remove('hidden');
        return false;
    }
}

// Vérif Mot de passe
const verifMotDePasse = () => {
    // ternaire
    // condition ? valeur si vrai : valeur si faux ;
    // return passwordInput.value != '' ? true : false;
    if (passwordInput.value) {
        passwordAlert.classList.add('hidden')
        return true;
    }else {
        passwordAlert.classList.remove('hidden')
        return false;
    }
}

// JQuery VS JS ES6
// JQuery requiert une librairie en plus alors qu'il existe une fonction native pour faire la même chose
// $('#input').value

// document.querySelector("#input").value

// Verif Confirmation du mot de passe
const verifMotDePasseConfirm = () => {
    // return passwordConfirmInput.value === passwordInput.value ? true : false ;

    //  version sans ternaire
    if (passwordConfirmInput.value === passwordInput.value) {
        passwordConfirmAlert.classList.add('hidden');
        return true;
    }else {
        passwordConfirmAlert.classList.remove('hidden');
        return false;
    }
}

// Changement du disabled du bouton
const changeButton = () => {
    if(verifPseudo() && verifEmail() && verifMotDePasse() && verifMotDePasseConfirm()){
        button.disabled = false
    }else{
        button.disabled = true
    }
}

// Écoute des events
pseudoInput.addEventListener('keyup', verifPseudo);
emailInput.addEventListener('keyup', verifEmail);
passwordInput.addEventListener('keyup', verifMotDePasse);
passwordConfirmInput.addEventListener('keyup', verifMotDePasseConfirm);
document.querySelector("form").addEventListener('keyup',changeButton)
