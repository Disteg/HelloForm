const ButtonOut = document.querySelector('.header__button_button');
const popup = document.querySelector('.popup');


function openPopup () {
    popup.classList.add('popup_open');
};

function colorbutton(){
    ButtonOut.classList.toggle('color_btn')
}
    



ButtonOut.addEventListener('click', openPopup);
ButtonOut.addEventListener('click', colorbutton);