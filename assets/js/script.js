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
	let passwordLength = passwordLengthInput.value;

	function generatePassword(length, charset) { 
	  let password = ""; 
	  for (let i = 0; i < length; i++) {
		password += charset[Math.floor(Math.random() * charset.length)];
	  }
	  return password;
	}

	let charsetNumbers = "0123456789";
	let charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
	let charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let charsetSpecial = "!№;%:?*()_+=";

	generateBtn.addEventListener("click", function () {
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
	  if (charset !== "") {
		passwordLength = passwordLengthInput.value;
		randomPasswordInput.value = generatePassword(passwordLength, charset);
	  }
	  else {
		randomPasswordInput.value = "error";
	  }
	});

    copyBtn.addEventListener("click", function() {
        let text = randomPasswordInput.value;
        navigator.clipboard.writeText(text);
    });
	
});