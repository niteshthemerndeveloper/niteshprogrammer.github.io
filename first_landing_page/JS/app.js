

const closeBtnEl = document.querySelector("#close");
const containerEl = document.querySelector(".container");
const landingFormEl = document.querySelector(".landing-form");


const hideLandingPage = () => {
  landingFormEl.style.display = "none";
  firstLandingPage();
}

closeBtnEl.addEventListener("click", hideLandingPage);

const firstLandingPage = () => {
  const showMessage = document.createElement("div");
  showMessage.className = "show-message";
  showMessage.appendChild(document.createTextNode("This was my First Landing Page using HTML, CSS, & JS"));
  containerEl.appendChild(showMessage);
}

