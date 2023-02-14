const inputName = document.getElementById('name__input');
const inputEmail = document.getElementById('email__input');
const inputPassword = document.getElementById('password__input');
const inputPasswordConfirm = document.getElementById('password-confirm__input');

const iconName = document.getElementById('name__icon');
const iconEmail = document.getElementById('email__icon');
const iconPassword = document.getElementById('password__icon');
const iconPasswordConfirm = document.getElementById('password-confirm__icon');

const errorName = document.getElementById('name--error');
const errorEmail = document.getElementById('email--error');
const errorPassword = document.getElementById('password--error');
const errorPasswordConfirm = document.getElementById('password-confirm--error');

var validName = /^[a-zA-Z]*$/;
var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

function validateName(){
	if(validName.test(inputName.value)){
		inputName.classList.remove('input--error');
		inputName.classList.add('input--success');
		iconName.classList.remove('icon--error');
		iconName.classList.add('icon--success');
		errorName.classList.add('hidden');
		return true;
	}else{
		inputName.classList.remove('input--success');
		inputName.classList.add('input--error');
		iconName.classList.remove('icon--success');
		iconName.classList.add('icon--error');
		errorName.classList.remove('hidden');
		return false;
	}
}

function validateEmail(){
	if(validEmail.test(inputEmail.value)){
		inputEmail.classList.remove('input--error');
		inputEmail.classList.add('input--success');
		iconEmail.classList.remove('icon--error');
		iconEmail.classList.add('icon--success');
		errorEmail.classList.add('hidden');
		return true;
	}else{
		inputEmail.classList.remove('input--success');
		inputEmail.classList.add('input--error');
		iconEmail.classList.remove('icon--success');
		iconEmail.classList.add('icon--error');
		errorEmail.classList.remove('hidden');
		return false;
	}
}

document.addEventListener('keydown', (event) => {
	if(event.target.value.length < 2) {
		event.target.classList.remove('input--success');
		inputName.classList.remove('input--success');
		iconName.classList.remove('icon--success', 'icon--error');
		errorName.classList.add('hidden');
	}
	if(event.target.id == 'name__input'){
		validateName();
	}else if(event.target.id == 'email__input'){
		validateEmail();
	}else if(event.target.id == 'password__input'){
		if(event.target.value.length == 8){
			inputPassword.classList.remove('input--success');
			inputPassword.classList.add('input--error');
			iconPassword.classList.remove('icon--success');
			iconPassword.classList.add('icon--error');
			errorPassword.classList.remove('hidden');
		}else{
			inputPassword.classList.add('input--success');
			inputPassword.classList.remove('input--error');
			iconPassword.classList.add('icon--success');
			iconPassword.classList.remove('icon--error');
			errorPassword.classList.add('hidden');
		}
	}
}, false);

inputPasswordConfirm.addEventListener('input', function() {
	let pass = inputPassword.value;
	let passCheck = this.value;
	if(pass !== passCheck){
		inputPasswordConfirm.classList.remove('input--success');
		inputPasswordConfirm.classList.add('input--error');
		iconPasswordConfirm.classList.remove('icon--success');
		iconPasswordConfirm.classList.add('icon--error');
		errorPasswordConfirm.classList.remove('hidden');
	}else{
		inputPasswordConfirm.classList.add('input--success');
		inputPasswordConfirm.classList.remove('input--error');
		iconPasswordConfirm.classList.add('icon--success');
		iconPasswordConfirm.classList.remove('icon--error');
		errorPasswordConfirm.classList.add('hidden');
	}
});

document.getElementById('submit').addEventListener('click', function(event) {

	if(validName.test(inputName.value) == true && inputEmail.classList.contains('input--success') && inputPassword.classList.contains('input--success') && inputPasswordConfirm.classList.contains('input--success')){
		alert('La inscripción ha sido correcta');
	}
	event.preventDefault();
});
