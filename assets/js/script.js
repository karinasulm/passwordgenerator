// вход программы: длина и набор символов
// выход программы: случайный сгенерированный пароль

"use strict";

document.addEventListener('DOMContentLoaded', function () {
	
	const passwordLengthInput = document.getElementById("password_length");
	const generateBtn = document.getElementById("generate_btn");
	const charsetNumbersInput = document.getElementById("charset_numbers");
	const charsetLowercaseInput = document.getElementById("charset_lowercase");
	const charsetUppercaseInput = document.getElementById("charset_uppercase");
	const charsetSpecialInput = document.getElementById("charset_special");
	const randomPasswordInput = document.getElementById("random_password");
    const copyBtn = document.getElementById("copy_btn");
	const rangeInput = document.getElementById("range-input");
	const minLength = 4;
	const maxLength = 24;

	let charsetNumbers = "0123456789";
	let charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
	let charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let charsetSpecial = "!№;%:?*()_+=";
	let length = passwordLengthInput.value;
	let charset = generateCharset(); 
	let password = generatePassword(length, charset);
	let checkboxInput = document.getElementsByClassName("passwordgenerator__checkbox-input");
	
	passwordLengthInput.value = rangeInput.value;

	rangeInput.oninput = function() {
		passwordLengthInput.value = this.value;
	}

	showPassword(password);

	generateBtn.addEventListener("click", function () {
		let length = passwordLengthInput.value;
		let charset = generateCharset(); 
		let password = generatePassword(length, charset);
		showPassword(password);
	});

	passwordLengthInput.addEventListener("input", function() {
		if ((this.value >= minLength) && (this.value <= maxLength)) {
			let length = passwordLengthInput.value;
			let charset = generateCharset(); 
			let password = generatePassword(length, charset);
			showPassword(password);
			rangeInput.value = this.value;
		} else if (this.value < minLength) {
			randomPasswordInput.value = "Min. length is 5. Please, input the correct length.";
			rangeInput.value = minLength;
		} else if (this.value > maxLength) {
			randomPasswordInput.value = "Max. length is 64. Please, input the correct length.";
			rangeInput.value = maxLength;
		}
	});

	copyBtn.addEventListener("click", function() {
        let text = randomPasswordInput.value;
        navigator.clipboard.writeText(text);
    });

	rangeInput.addEventListener("input", function () {
			let length = passwordLengthInput.value;
			let charset = generateCharset(); 
			let password = generatePassword(length, charset);
			showPassword(password);
	});

	for (let i = 0; i < checkboxInput.length; i++) {
		checkboxInput[i].addEventListener("input", function () {
			let length = passwordLengthInput.value;
			let charset = generateCharset(); 
			let password = generatePassword(length, charset);
			showPassword(password);
		});
	}

	function generateCharset() {
		let charset = "";
		if (charsetNumbersInput.checked) {
			charset += charsetNumbers;
		}
		if (charsetLowercaseInput.checked) {
			charset += charsetLowercase;
		}
		if (charsetUppercaseInput.checked) {
			charset += charsetUppercase;
		}
		if (charsetSpecialInput.checked) {
			charset += charsetSpecial;
		}
		return charset;
	}

	function generatePassword(length, charset) { 
		let password = "";
		if (charset !== "") {
			for (let i = 0; i < length; i++) {
			password += charset[Math.floor(Math.random() * charset.length)];
			}
		}
		return password;
	  }
  
	function showPassword(password) {
		if (password !== "") {
			randomPasswordInput.value = password;
		}
		else {
			randomPasswordInput.value = "Error. Please, сhoose at least one checkbox.";
		}
	}
	
});