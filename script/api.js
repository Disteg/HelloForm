const ButtonOut = document.querySelector('.header__button_button');
const popup = document.querySelector('.popup');

function openPopup () {
    popup.classList.add('popup_open')
};

ButtonOut.addEventListener('click', openPopup);