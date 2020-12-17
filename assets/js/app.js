// getting the form itself
const form = document.getElementById('form');
// getting all the inputs
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_2 = document.getElementById('password-2');



// functions
// show input error outline function
var showError = (input,message) => {
	const formControl = input.parentElement;
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small');
	small.innerText = message; 
}
// show success outline function
var showSuccess = input => {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// check required fields (function)
var checkRequired = inputArr => {
	inputArr.forEach ( input => {
		if (input.value.trim() === ''){
			showError(input, `${getFeildName(input)} is required`); 
		}else{
			showSuccess(input); 
		}
	})
}

// check length of the input
var checkLength = (input,min,max) => {
	if (input.value.length < min){
		showError(input, `${getFeildName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFeildName(input)} can not be more than ${max} characters`);
	}else{
		showSuccess(input); 
	}
}
// check if email is valid
const checkEmail = input => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
    	showSuccess(input);
    } else{
    	showError(input, 'Email is not valid');
    }
}
// check if paswords match
const checkPasswordsMatch = (input1,input2) =>{
	if (input1.value !== input2.value){
		showError(input2, 'Passwords do not match'); 
	}
}

// get feild name
var getFeildName = input => {
	return input.id.charAt(0).toUpperCase()+input.id.slice(1);  
}

// event listeners
form.addEventListener('submit', e => {
	e.preventDefault();
	
	// if (username.value === '') {
	// 	showError(username, 'Username is required');
	// }else{
	// 	showSuccess(username);
	// }	

	// if (email.value === '') {
	// 	showError(email, 'Email is required');
	// }else if (!isValidEmail(email)) {
	// 	showError(email, 'Email is not valid');
	// }
	// else{
	// 	showSuccess(email);
	// }	

	// if (password.value === '') {
	// 	showError(password, 'Password is required');
	// }else{
	// 	showSuccess(password);
	// }	

	// if (password_2.value === '') {
	// 	showError(password_2, 'Comform Password Needed');
	// }else{
	// 	showSuccess(password_2);
	// 

	// refactoring 

	checkRequired([username, password, password_2]);
	checkLength(username,5,15);
	checkLength(password,8,10);
	checkEmail(email);
	checkPasswordsMatch(password, password_2);
})