Telegram.WebApp.ready();
        Telegram.WebApp.expand(); /

document.addEventListener('DOMContentLoaded', (event) => {
  const menu = document.getElementById('menu');
  const navDrop = document.getElementById('navdrop');
  const navLinks = document.querySelectorAll('#nav a');
  const navDropLinks = navDrop.querySelectorAll('a');
  let navDropVisible = false;

  // Изначально скрываем #navdrop и его ссылки
  navDrop.style.display = 'none';
  navDropLinks.forEach(link => link.style.display = 'none');

  // Функция для скрытия navDrop с анимацией
  function hideNavDrop() {
    // Скрываем ссылки #navdrop a перед началом анимации NavDropSizeRet
    navDropLinks.forEach(link => link.style.display = 'none');
    navDrop.style.animation = 'NavDropSizeRet 0.5s ease forwards';
    navDrop.addEventListener('animationend', () => {
      if (!navDropVisible) {
        navDrop.style.display = 'none';
        navLinks.forEach(link => {
          link.style.visibility = 'visible';
          link.style.pointerEvents = 'auto';
        });
      }
    }, { once: true });
    navDropVisible = false;
  }

  // Функция для показа navDrop с анимацией
  function showNavDrop() {
    // Скрываем текст #nav a немедленно при нажатии на #menu
    navLinks.forEach(link => {
      link.style.visibility = 'hidden';
      link.style.pointerEvents = 'none';
    });

    // Показываем navDrop с анимацией NavDropSize
    navDrop.style.display = 'block';
    navDrop.style.animation = 'NavDropSize 0.5s ease forwards';
    navDrop.addEventListener('animationend', () => {
      if (navDropVisible) {
        navDropLinks.forEach(link => link.style.display = 'block');
      }
    }, { once: true });
    navDropVisible = true;
  }

  // Переключение видимости navDrop при клике на меню
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
    if (navDropVisible) {
      hideNavDrop();
    } else {
      showNavDrop();
    }
  });

  // Скрытие navDrop при клике вне области navDrop или меню
  document.addEventListener('click', (event) => {
    if (navDropVisible && !navDrop.contains(event.target) && !menu.contains(event.target)) {
      hideNavDrop();
    }
  });
});

// Функция для установки темы
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.getElementById('theme-style').setAttribute('href', themeName);
}

// Функция для инициализации темы при загрузке страницы
function initTheme() {
  const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'stylesDARK.css' : 'styles(orig).css');
  setTheme(storedTheme);
}

// Функция для смены темы с анимацией
function changeTheme(newTheme) {
  document.body.style.transition = 'background-color 0.5s';
  setTheme(newTheme);
}

// Установка начальной темы при загрузке страницы
document.addEventListener('DOMContentLoaded', initTheme);

// Добавление слушателей событий для элементов #moon и #sun
document.getElementById('moon').addEventListener('click', function() {
  changeTheme('stylesDARK.css');
});

document.getElementById('sun').addEventListener('click', function() {
  changeTheme('styles(orig).css');
});
