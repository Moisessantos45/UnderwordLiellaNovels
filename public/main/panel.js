document.addEventListener("DOMContentLoaded", function () {
  let footer = document.querySelectorAll(".footer p");
  let p = footer[1];
  p.innerHTML = "";
  let fecha = new Date();
  let anio = fecha.getFullYear();
  console.log(anio);
  p.innerHTML = `Copyright © ${anio} UnderwordLiellaNovels`;
});

// Obtener la tabla y los elementos td
const table = document.querySelector('.table2');
const tds = table.querySelectorAll('.table2 td');
let slider_vertical = document.querySelector(".list-slider")
console.log("tds", tds)

slider_vertical.addEventListener("click", e => {
  console.log("Si entro");
  let list = document.querySelectorAll(".form")
  let evento = e.target.classList[1] || e.target.classList[0]
  list.forEach(ele => {
    if (ele.classList[0] !== evento) {
      ele.classList.add("ocultar")
      ele.classList.remove("mostrar_form")
    }
    else {
      ele.classList.add("mostrar_form")
      ele.classList.remove("ocultar")
    }
  })
  console.log("evento", evento)
})

// Función para cambiar la longitud de los valores de drive y mega
function cambiarLongitud(ancho) {
  if (ancho < 700) {
    tds.forEach(td => {
      if (td.textContent.length > 34) {
        td.textContent = td.textContent.substr(0, 34);
        // console.log("tds",td)
      }
    });
  } else {
    tds.forEach(td => {
      if (td.textContent.length <= 34) {
        const datos = JSON.parse(td.dataset.datos);
        if (td.classList.contains('drive')) {
          td.textContent = datos.drive;
        } else if (td.classList.contains('mega')) {
          td.textContent = datos.mega;
        }
      }
    });
  }
}
// Cambiar la longitud al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', () => {
  cambiarLongitud(window.innerWidth);
});

window.addEventListener('resize', () => {
  cambiarLongitud(window.innerWidth);
});

let login = document.querySelector(".bars")
let ajustes = document.querySelector(".login-ventana")
let sesion = document.querySelector(".login-sesion")
let cerra = document.querySelector(".cerrar")

let slider_menu = document.querySelector(".menu-slider")
let slider = document.querySelector(".slider-vertical")
let slideTitle = document.querySelector(".slider-title")
let slider_list = document.querySelector(".list-slider")
let opciones = document.querySelectorAll(".list-opciones")

login.addEventListener("click", () => {
  ajustes.classList.toggle("mostrar")
  login.classList.add("ocultar")
  cerra.classList.add("mostrar")
})

cerra.addEventListener("click", () => {
  login.classList.remove("ocultar")
  cerra.classList.remove("mostrar")
  ajustes.classList.remove("mostrar")

})

slider_menu.addEventListener("click", () => {
  slider.classList.toggle("slider-vertical-min")
  slider_menu.classList.toggle("menu-slider-min")
  slider_list.classList.toggle("list-slider-min")
  slideTitle.classList.toggle("ocultar-title")
})

// opciones.forEach((opcion) => {
//   opcion.addEventListener("click", (e) => {
//     console.log("si funciona")
//     e.stopPropagation();
//   });
// });