const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-add-card");
const profileButton = document.querySelector(".profile__edit-button");
const openCardForm = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__paragraph");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile");
const formCards = document.querySelector("#form-addcard");
const closeButton = document.querySelector(".form__close-button");
const closeButtonCard = document.querySelector("#close-addcard-form");
const closePopupImage = document.querySelector("#close-popup-image");
const template = document.querySelector(".template-card");
const cardArea = document.querySelector(".places");
const inputTitle = document.querySelector("#input-title");
const inputLink = document.querySelector("#input-url");
const popupImagePlace = document.querySelector("#popup-place");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function cardGenerator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".place");
  const cardImage = card.querySelector(".place__photo");
  const cardTitle = card.querySelector(".place__photo-name");
  const btnDelete = card.querySelector(".place__photo-delete");
  const btnLike = card.querySelector(".place__photo-heart");
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("place__photo-heart_active");
  });

  btnDelete.addEventListener("click", function () {
    card.remove();
  });

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  cardArea.append(card);

  cardImage.addEventListener("click", function (evt) {
    evt.preventDefault();

    popupImagePlace.classList.add("popup__show");
    const popupImage = document.querySelector(".popup__place-image");
    const popupPlaceName = document.querySelector(".popup__place-name");
    popupImage.src = link;
    popupPlaceName.textContent = name;
    popupImage.alt = name;
  });

  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});

profileButton.addEventListener("click", function (evt) {
  popupProfile.classList.add("popup__show");
});

function clearInputs() {
  inputName.value = "";
  inputAbout.value = "";
  inputTitle.value = "";
  inputLink.value = "";
}

closeButton.addEventListener("click", function (evt) {
  popupProfile.classList.remove("popup__show");
});

function handleCloseProfile() {
  popupProfile.classList.remove("popup__show");

  clearInputs();
}
openCardForm.addEventListener("click", function (evt) {
  popupCards.classList.add("popup__show");
});

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  handleCloseProfile();
});

closeButtonCard.addEventListener("click", function (evt) {
  popupCards.classList.remove("popup__show");
});

closePopupImage.addEventListener("click", function (evt) {
  popupImagePlace.classList.remove("popup__show");
});

formCards.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardGenerator(inputTitle.value, inputLink.value);
  cardArea.prepend(cardToAdd);
  popupCards.classList.remove("popup__show");
  clearInputs();
});
