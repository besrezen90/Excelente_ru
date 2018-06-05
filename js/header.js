let hiddenMenu = document.querySelector('.hidden-menu');
let mainMenu = document.querySelector('.menu-block');
let scrollForFixedMenu = 100;

document.addEventListener('scroll', () => {
  if (window.pageYOffset >= scrollForFixedMenu) {
    hiddenMenu.classList.add('hidden-menu_visible');
  } else {
    hiddenMenu.classList.remove('hidden-menu_visible');
  }
})

let hiddenMenuButton = document.querySelector('.hidden-menu__menu');
let hiddenMenuButtonClose = document.querySelector('.hidden-menu__close');

hiddenMenuButton.onclick = function () {
  if (document.querySelector('.menu-block_from-hidden')) {
    document.querySelector('.menu-block_from-hidden').classList.toggle('menu-block_from-hidden');
    hiddenMenuButton.style = '';
    hiddenMenuButtonClose.style.display = 'none';
    scrollForFixedMenu = 100;
  } else {
    document.querySelector('.menu-block').classList.toggle('menu-block_from-hidden');
    hiddenMenuButton.style.color = '#ffffff'
    hiddenMenuButton.style.backgroundImage = 'unset';
    hiddenMenuButton.style.border = 'solid 2px #ffffff';
    hiddenMenuButtonClose.style.display = 'flex';
    scrollForFixedMenu = 0;
  }

}