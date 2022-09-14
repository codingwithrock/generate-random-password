let charSet = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWX";
let numberSet = "0123456789";
let specialCharSet = "!@#$%^&*()";

const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};

const handleSlider = (event) => {
  const charCountEl = document.getElementById("char-count");
  charCountEl.innerText = event;
};

const handleCheckbox = () => {
  const numberEl = document.getElementById("number");
  const specialCharEl = document.getElementById("special");

  if (numberEl.checked === true) {
    charSet += "0123456789";
  } else {
    charSet = charSet.replace(/0123456789/g, "");
  }
  if (specialCharEl.checked === true) {
    charSet += "!@#$%^&()";
  } else {
    charSet = charSet.replace(/[^\w ]/g, "");
  }
  generatePassword();
};

const generatePassword = () => {
  let passwordEl = document.getElementById("password").value;

  const charCount = document.getElementById("char-count").innerText;

  let password = "";


  for (let i = 0; i < parseInt(charCount); i++) {
    const randomNumber = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomNumber, randomNumber + 1);

    // console.log(password);

  }

  passwordEl = password;
  console.log(password);

};

const handleViewPassword = () => {
  const passwordEl = document.getElementById("password");
  const view = document.getElementById("view-check");
  const viewIcon = document.getElementById("view-icon");
  console.log("working");

  if (view.checked === true) {
    passwordEl.setAttribute("type", "text");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye-slash text-white"></i>`;
  } else {
    passwordEl.setAttribute("type", "password");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye text-white"></i>`;
  }
};

const handleCopy = () => {
  const copyText = document.getElementById("password");
  copyText.select();
  document.getElementById("copy");
  alert("Password copied to clipboard");
};

generatePassword();
