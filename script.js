document.body.innerHTML = `
  <div id="loader">
    <div class="cubes">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
  </div>
<nav>
  <div>
    <img
      class="header__logo-image"
      id="logo"
      src="./svg/Image-particulier.svg"
      alt="Логотип проекта"
    />
  </div>
  <ul>
    <li><a href="#about">Обо мне</a></li>
    <li><a href="#skills">Навыки</a></li>
    <li><a href="#projects">Проекты</a></li>
    <li><a href="#experience">Опыт</a></li>
    <li><a href="#contact">Контакты</a></li>
  </ul>
</nav>

  <header id="header"></header>
  <main id="main"></main>
  <footer id="footer"></footer>
`;

// Рендер header
const header = document.getElementById("header");
header.innerHTML = `
  <div id="header-container">
    <h1 id="name" style="visibility: hidden;"></h1> <!-- Изначально скрываем имя -->
  </div>
<div class="smoke-container">
  <img src="./svg/top_back_ (1).svg" alt="Ноутбук" />
</div>
`;

// Анимация текста
const nameElement = document.getElementById("name");
const textLines = [
  "Привет!",
  "Меня зовут Сергей Гарбузов.",
  "Я Frontend-разработчик.",
];
let currentLine = 0;
let currentChar = 0;
const cursor = '<span class="cursor">|</span>';

function typeLine() {
  if (currentLine < textLines.length) {
    const line = textLines[currentLine];
    if (currentChar < line.length) {
      nameElement.innerHTML =
        textLines.slice(0, currentLine).join("<br>") +
        (currentLine > 0 ? "<br>" : "") +
        line.slice(0, currentChar + 1) +
        cursor;
      currentChar++;
      setTimeout(typeLine, 100); // Скорость печати символа
    } else {
      currentLine++;
      currentChar = 0;
      setTimeout(typeLine, 500); // Пауза между строками
    }
  } else {
    nameElement.innerHTML = textLines.join("<br>");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Находим элемент логотипа
  const logo = document.getElementById("logo");

  // Добавляем обработчик события на клик по логотипу
  logo.addEventListener("click", () => {
    location.reload(); // Перезагружаем страницу
  });

  // Убираем экран загрузки и запускаем анимацию имени
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.transition = "opacity 0.5s ease-out";
    setTimeout(() => {
      loader.style.display = "none"; // Убираем загрузку
      nameElement.style.visibility = "visible"; // Делаем имя видимым
      typeLine(); // Запускаем анимацию текста
    }, 500);
  }, 2000); // Задержка экрана загрузки 2 секунды

  // Логика для изменения стиля меню при прокрутке
  document.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    // Загрузка контента при прокрутке
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= windowHeight) {
        section.classList.add('visible');
      }
    });
  });

  // Основной контент
  const content = document.getElementById("main");
  content.innerHTML = `
    <div id="about" class="section">
      <h2>Обо мне</h2>
      <p>Я — фронтенд-разработчик с увлечением изучаю новые технологии и стремлюсь развиваться в IT. Моя мотивация — создавать удобные и эффективные интерфейсы, которые делают жизнь пользователей проще. Я уверен, что роль разработчика предоставляет отличные возможности для постоянного обучения и самосовершенствования, и я готов к новым вызовам. <br>Свой путь в разработке я начал с интереса к созданию красивых и функциональных веб-страниц. Сегодня мне нравится работать с современными инструментами, изучать фреймворки и искать эффективные решения для различных задач. Я стремлюсь постоянно улучшать свои навыки и расширять кругозор, чтобы быть востребованным специалистом.<p>
    </div>
    <div id="skills" class="section">
      <h2>Мои ключевые навыки</h2>
      <ul class="skills-list">
        <li>
          <img src="./svg/html-1.svg" alt="HTML" class="skill-icon" />
          HTML: Уверенное владение, опыт работы с семантической разметкой, адаптивной версткой
        </li>
        <li>
          <img src="./svg/css-3.svg" alt="CSS" class="skill-icon" />
          CSS: Создание адаптивных и кроссбраузерных страниц, опыт с Flexbox, Grid, анимациями.
        </li>
        <li>
          <img src="./svg/195156744-8a21399b-f952-4765-b03c-c5feeb2c5fbe.svg" alt="JS" class="skill-icon" />
          JavaScript: Написание скриптов для динамических элементов, знание основ ООП.
        </li>
        <li>
          <img src="./svg/react-2.svg" alt="React" class="skill-icon" />
          React: Опыт создания компонентов, работа с хуками и состоянием, базовое понимание Redux
        </li>
        <li>
          <img src="./svg/nodejs-3.svg" alt="Nodejs" class="skill-icon" />
          Node.js: Знаком с основами создания серверных приложений, работа с Express
        </li>
        <li>
          <img src="./svg/sass-1.svg" alt="Sass" class="skill-icon" />
          Sass: Использование препроцессоров для удобства и структуры стилей.
        </li>
        <li>
          <img src="./svg/typescript.svg" alt="Typescript" class="skill-icon" />
          TypeScript: Написание типизированных приложений, базовое понимание принципов работы с типами.
        </li>
        <li>
          <img src="./svg/webpack.svg" alt="Webpack" class="skill-icon" />
          Webpack: Настройка сборки для оптимизации производительности проектов.
        </li>
      </ul>
    </div>
    <div id="projects" class="section">
      <h2>Мои проекты</h2>
      <p>Вот несколько учебных проектов, которые я выполнил в процессе обучения:</p>
      <ul class="projects-list">
        <li>
          <h3>Проект 1: Посмотри в окно</h3>
          <p>Посмотри в окно — это веб-приложение, которое отображает изображения с разных уголков мира через API, предоставляя пользователю уникальную возможность увидеть интересные виды и пейзажи. Это приложение создано для демонстрации работы с внешними API и динамического отображения данных.</p>
          <p><a class="contact" href="https://github.com/Leonablu/posmotri_v_okno" target="_blank">Перейти на GitHub</a></p>
        </li>
        <li>
          <h3>Проект 2: Сложно сосредоточиться</h3>
          <p>Сложно сосредоточиться — это веб-приложение, предназначенное для помощи в управлении временем и улучшении фокуса. Проект включает в себя функционал таймера с возможностью настроить периоды работы и отдыха, что позволяет более эффективно организовать рабочее время.</p>
          <p><a class="contact" href="https://github.com/Leonablu/slozhno-sosredotochitsya" target="_blank">Перейти на GitHub</a></p>
        </li>
        <li>
          <h3>Проект 3: Mesto</h3>
          <p>Mesto — это веб-приложение для загрузки и отображения карточек с изображениями и подписями. Пользователи могут добавлять новые карточки, удалять и ставить лайки на карточки. Проект реализован с использованием JavaScript, CSS и HTML.</p>
          <p><a class="contact" href="https://github.com/Leonablu/mesto-project-ff" target="_blank">Перейти на GitHub</a></p>
        </li>
      </ul>
    </div>
    <div id="experience" class="section">
      <h2>Опыт работы</h2>
      <p>Я начинающий специалист в области frontend-разработки и стремлюсь развиваться в этой сфере. Работал над несколькими учебными проектами и готов к новым вызовам. Моя цель — постоянно совершенствовать свои навыки и расти как профессионал.</p>
    </div>
    <div id="contact" class="section">
      <h2>Контакты</h2>
      <p>Связаться: <a class="contact" target="_blank" href="mailto:sergey.garbuzov.97@gmail.com">Написать на почту</a> | <a class="contact" target="_blank" href="https://t.me/LeonaBlu">Telegram</a></p>
    </div>
  `;

  // Футер
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <p>© 2025 Сергей Гарбузов</p>
  `;
});
