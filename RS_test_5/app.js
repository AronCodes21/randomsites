// : DROPDOWN MENU

const dropDown = (function () {
  const navList = document.querySelector(".nav-list");
  const burgerMenu = document.querySelector("#burger");

  const burgerLn1 = document.getElementById("line-1");
  const burgerLn2 = document.getElementById("line-2");
  const burgerLn3 = document.getElementById("line-3");

  const link1 = document.getElementById("link-1");
  const link2 = document.getElementById("link-2");
  const link3 = document.getElementById("link-3");

  burgerMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    burgerLn1.classList.toggle("menu-ln1");
    burgerLn2.classList.toggle("menu-ln2");
    burgerLn3.classList.toggle("menu-ln3");
  });
  link1.addEventListener("click", () => {
    navList.classList.toggle("active");
    burgerLn1.classList.toggle("menu-ln1");
    burgerLn2.classList.toggle("menu-ln2");
    burgerLn3.classList.toggle("menu-ln3");
  });
  link2.addEventListener("click", () => {
    navList.classList.toggle("active");
    burgerLn1.classList.toggle("menu-ln1");
    burgerLn2.classList.toggle("menu-ln2");
    burgerLn3.classList.toggle("menu-ln3");
  });
  link3.addEventListener("click", () => {
    navList.classList.toggle("active");
    burgerLn1.classList.toggle("menu-ln1");
    burgerLn2.classList.toggle("menu-ln2");
    burgerLn3.classList.toggle("menu-ln3");
  });
})();
