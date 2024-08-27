function loaded() {
      document.querySelector("#loading").style.display = 'none';
      }

var navDrop = document.querySelector('#navdrop');
var menu = document.querySelector('#menu');

function Open() {
  if (navDrop.style.transform == 'rotateX(0deg)'){
  navDrop.style.transform = 'rotateX(90deg)';
  navDrop.style.opacity = '0.3';
  navDrop.style.transition = ' .3s';
  } else {
  navDrop.style.transform = 'rotateX(0deg)';
  navDrop.style.opacity = '1';
  navDrop.style.transition = ' .3s';
  }
}

menu.addEventListener('click', Open);
