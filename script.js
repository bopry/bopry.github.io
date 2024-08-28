function loaded() {
      document.querySelector("#loading").style.display = 'none';
      document.querySelector("#loading-box").style.display = 'none';
      }

var navDrop = document.querySelector('#navdrop').style;
var menu = document.querySelector('#menu');

function Open() {
  if (navDrop.transform == 'rotateX(0deg)'){
  navDrop.transform = 'rotateX(90deg)';
  navDrop.opacity = '0.3';
  navDrop.transition = ' .3s';
  } else {
  navDrop.transform = 'rotateX(0deg)';
  navDrop.opacity = '1';
  navDrop.transition = ' .3s';
  }
}

menu.addEventListener('click', Open);
