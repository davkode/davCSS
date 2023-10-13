/* ======================================
  ! _DECLARACIÓN DE OBJETOS Y VARIABLES_
====================================== */
/*let btnToggle = document.getElementsByClassName('menu-toggle');
let menu = document.getElementsByClassName('header-menu');*/
let btnToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("header-menu");

/* =============================
  ! _DECLARACIÓN DE FUNCIONES_
  ============================ */
/* _BtnToogle - Menu_ */
function changeClass() {
  menu.classList.toggle("menu-open");
  btnToggle.classList.toggle("toggle-open");
}

/* =========================
  ! _ASIGNACIÓN DE EVENTOS_
  ======================== */
  window.onload = function () {
    /* --- Boton y Menu Toogle --- */
    btnToggle.addEventListener("click", changeClass);
  }