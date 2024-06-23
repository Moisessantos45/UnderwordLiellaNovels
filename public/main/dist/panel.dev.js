"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var footer = document.querySelectorAll(".footer p");
  var p = footer[1];
  p.innerHTML = "";
  var fecha = new Date();
  var anio = fecha.getFullYear();
  console.log(anio);
  p.innerHTML = "Copyright \xA9 ".concat(anio, " UnderwordLiellaNovels");
}); // Obtener la tabla y los elementos td

var table = document.querySelector('.table2');
var tds = table.querySelectorAll('.table2 td');
var slider_vertical = document.querySelector(".list-slider");
console.log("tds", tds);
slider_vertical.addEventListener("click", function (e) {
  console.log("Si entro");
  var list = document.querySelectorAll(".form");
  var evento = e.target.classList[1] || e.target.classList[0];
  list.forEach(function (ele) {
    if (ele.classList[0] !== evento) {
      ele.classList.add("ocultar");
      ele.classList.remove("mostrar_form");
    } else {
      ele.classList.add("mostrar_form");
      ele.classList.remove("ocultar");
    }
  });
  console.log("evento", evento);
}); // Función para cambiar la longitud de los valores de drive y mega

function cambiarLongitud(ancho) {
  if (ancho < 700) {
    tds.forEach(function (td) {
      if (td.textContent.length > 34) {
        td.textContent = td.textContent.substr(0, 34); // console.log("tds",td)
      }
    });
  } else {
    tds.forEach(function (td) {
      if (td.textContent.length <= 34) {
        var datos = JSON.parse(td.dataset.datos);

        if (td.classList.contains('drive')) {
          td.textContent = datos.drive;
        } else if (td.classList.contains('mega')) {
          td.textContent = datos.mega;
        }
      }
    });
  }
} // Cambiar la longitud al cargar la página y al cambiar el tamaño de la ventana


window.addEventListener('load', function () {
  cambiarLongitud(window.innerWidth);
});
window.addEventListener('resize', function () {
  cambiarLongitud(window.innerWidth);
});
var login = document.querySelector(".bars");
var ajustes = document.querySelector(".login-ventana");
var sesion = document.querySelector(".login-sesion");
var cerra = document.querySelector(".cerrar");
var slider_menu = document.querySelector(".menu-slider");
var slider = document.querySelector(".slider-vertical");
var slideTitle = document.querySelector(".slider-title");
var slider_list = document.querySelector(".list-slider");
var opciones = document.querySelectorAll(".list-opciones");
login.addEventListener("click", function () {
  ajustes.classList.toggle("mostrar");
  login.classList.add("ocultar");
  cerra.classList.add("mostrar");
});
cerra.addEventListener("click", function () {
  login.classList.remove("ocultar");
  cerra.classList.remove("mostrar");
  ajustes.classList.remove("mostrar");
});
slider_menu.addEventListener("click", function () {
  slider.classList.toggle("slider-vertical-min");
  slider_menu.classList.toggle("menu-slider-min");
  slider_list.classList.toggle("list-slider-min");
  slideTitle.classList.toggle("ocultar-title");
}); // opciones.forEach((opcion) => {
//   opcion.addEventListener("click", (e) => {
//     console.log("si funciona")
//     e.stopPropagation();
//   });
// });