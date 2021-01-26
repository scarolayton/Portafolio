const hamburger = document.querySelector(".btn-menu");
const menu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
  if (menu.className === "nav-menu showMenu") {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.backgroundColor =
      "rgba(44, 39, 39, 0.938)";
  } else {
    document.getElementsByTagName("html")[0].style.overflow = "auto";
    document.getElementsByTagName("body")[0].style.backgroundColor =
      "transparent";
  }
});

menu.childNodes[1].addEventListener("click", () => {
  document.getElementsByTagName("html")[0].style.overflow = "auto";
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "transparent";
  menu.classList.remove("showMenu");
});
//Scroll Efect

let goTop = document.querySelector(".go-top");

window.onscroll = () => {
  //Hide & Show - Scroll Menu (Function)

  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if (arriba <= 600) {
    //Ocultar Go Top
    goTop.style.right = "-100px";
  } else {
    //Mostrar Go Top
    goTop.style.right = "0px";
  }
};

//Go Top Click
goTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
