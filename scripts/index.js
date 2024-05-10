const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__paragraph");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile");
const closeButton = document.querySelector(".form__close-button");

profileButton.addEventListener("click", function (evt) {
  popupProfile.classList.add("popup__show");
});

function clearInputs() {
  inputName.value = "";
  inputAbout.value = "";
}

closeButton.addEventListener("click", function (evt) {
  popupProfile.classList.remove("popup__show");
});

function handleCloseProfile() {
  popupProfile.classList.remove("popup__show");
  clearInputs();
}

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  handleCloseProfile();
});
