function validation() {
	var email = document.getElementById('email').value;
	var validationTxt = document.querySelector('.validation');
	var errorIcon = document.querySelector('.error__icon');
	var emailContainer = document.querySelector('.email__container');
	var pattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/;

	if (email.match(pattern)) {
		emailContainer.classList.add('valid');
		emailContainer.classList.remove('invalid');
		validationTxt.innerHTML = 'Please check your email';
		validationTxt.style.color = '#f96262';
		errorIcon.style.display = 'none';
	} else {
		emailContainer.classList.add('invalid');
		emailContainer.classList.remove('valid');
		validationTxt.innerHTML = 'Please provide a valid email';
		validationTxt.style.color = '#f96262';
		errorIcon.style.display = 'block';
	}
	if (email == '') {
		emailContainer.classList.add('invalid');
		emailContainer.classList.remove('valid');
		validationTxt.innerHTML = 'Input your email first before submitting';
		errorIcon.style.display = 'block';
	}
}
