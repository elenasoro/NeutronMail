const displayMenu = function(){
    let menu = document.querySelector('.menu');
    if (menu.className === "menu") {
        menu.className += " responsive";
      } else {
        menu.className = "menu";
      }
}

const openPopup = function(){
  let buttonOpen = document.querySelector('.get-client');
  let overlay = document.querySelector('.overlay');
  
  buttonOpen.addEventListener('click', overlay.setAttribute('style', 'display:block'));
  
}

const closePopup = function(){
  let buttonClose = document.querySelector('.js-close');
  let buttonSubmit = document.querySelector('.submit');
  let overlay = document.querySelector('.overlay');

  buttonClose.addEventListener('click', overlay.setAttribute('style', 'display:none'));
  buttonSubmit.addEventListener('click', overlay.setAttribute('style', 'display:none'));
}

const readMore = function(num) {
  let text = document.querySelectorAll('span.works__text')[num];

  text.classList.toggle('work__text_read-less-state');
  console.log(text);
}


