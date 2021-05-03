const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  const menuContainer = document.querySelector(".menu-container");
  const close1 = document.querySelector("#close1");
  const close2 = document.querySelector("#close2");
  const menuHalf = document.querySelector("#half");

  close1.classList.toggle("close1");
  close2.classList.toggle("close2");
  menuHalf.classList.toggle("half");

  menuContainer.classList.toggle("originalPosition");
});
