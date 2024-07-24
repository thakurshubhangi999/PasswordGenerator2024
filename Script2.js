let inputSlider = document.getElementById("pwRange");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("pwField");
let lowercaseCheckbox = document.getElementById("lowercase");
let uppercaseCheckbox = document.getElementById("uppercase");
let numbersCheckbox = document.getElementById("numbers");
let symbolsCheckbox = document.getElementById("symbols");
let generatorButton = document.getElementById("genBtn");
let copyPassword = document.getElementById("copyPass");
let togglePassword = document.getElementById("togglePass");

// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

generatorButton.addEventListener("click", () => {
  passBox.type = "password"; // Ensure the password field is in hidden mode
  passBox.value = generatorPassword();
  togglePassword.innerText = "visibility_off";
  togglePassword.title = "Show Password";
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// function to generate password
function generatorPassword() {
  let genPass = "";
  let allChars = "";

  allChars += lowercaseCheckbox.checked ? lowerChars : "";
  allChars += uppercaseCheckbox.checked ? upperChars : "";
  allChars += numbersCheckbox.checked ? allNumbers : "";
  allChars += symbolsCheckbox.checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0) {
    return genPass;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPass;
}

copyPassword.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyPassword.innerText = "check";
    copyPassword.title = "Password Copied";

    setTimeout(() => {
      copyPassword.innerHTML = "content_copy";
      copyPassword.title = "";
    }, 3000);
  }
});

// Toggle password visibility
togglePassword.addEventListener("click", () => {
  if (passBox.type === "password") {
    passBox.type = "text";
    togglePassword.innerText = "visibility";
    togglePassword.title = "Hide Password";
  } else {
    passBox.type = "password";
    togglePassword.innerText = "visibility_off";
    togglePassword.title = "Show Password";
  }
});
