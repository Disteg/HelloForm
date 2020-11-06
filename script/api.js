const ButtonOut = document.querySelector('.header__button_button');
const popup = document.querySelector('.popup');


function openPopup () {
    popup.classList.add('popup_open');
};

function colorbutton(){
    ButtonOut.classList.toggle('color_btn')
}
    
function closePopup(popup){
popup.classList.remove('popup_open')
}



ButtonOut.addEventListener('click', openPopup);
ButtonOut.addEventListener('click', colorbutton);