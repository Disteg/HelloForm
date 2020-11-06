const ButtonOut = document.querySelector('.header__button_button');
const popup = document.querySelector('.popup');
const btnclose = document.querySelector('.popup__btn-close');
const inputPassword = document.querySelector('#input-password');
const inputLogo = document.querySelector('#input-logo');
const btnPopup = document.querySelector('.btnPopup');



function openPopup () {
    popup.classList.add('popup_open');
};

function colorbutton(){
    ButtonOut.classList.toggle('color_btn')
}
    
function closePopup(){
popup.classList.remove('popup_open')
}


btnclose.addEventListener('click', colorbutton)
btnclose.addEventListener('click',closePopup )
ButtonOut.addEventListener('click', openPopup);
ButtonOut.addEventListener('click', colorbutton);