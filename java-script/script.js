document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".header-burger-button");
  const burgerMenu = document.querySelector(".header-nav-burger");
  const closeBurgerBtn = document.querySelector(".close-burger");

  // Відкривання бургер-меню
  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // блокування скролу, коли бургер-меню відкрите
  });

  // Закривання бургер-меню
  closeBurgerBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    document.body.style.overflow = "auto"; // повертання скролу
  });
});

// Функція закриття бургер-меню при натисканні на посилання
const burgerLinks = document.querySelectorAll(".header-nav-burger a");
burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const burgerMenu = document.querySelector(".header-nav-burger");
    burgerMenu.classList.remove("active");
    document.body.style.overflow = "auto"; // повертання скролу
  });
});