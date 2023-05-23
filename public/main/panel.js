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
console.log("tds",tds)

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

let agregar = document.querySelector(".agregar")
let actulizar = document.querySelector(".actulizar")
let btnagregar = document.querySelector(".agre")
let btnactulizar = document.querySelector(".actu")

let btncapitagre = document.querySelector(".agrecapi")
let btncapitact = document.querySelector(".actucapi")

let capituloagregar = document.querySelector(".capitulo")
let capituloactu = document.querySelector(".actu-capitulo")

let btndatos = document.querySelector(".contenido-ver")
let mostrarTabla = document.querySelector(".datos_base")

let visitas = document.querySelector(".visitas-pag")
let mostrarVisitas = document.querySelector(".datos_base-two")

let btndalatecards = document.querySelector(".delatecards")
let btndalatecapi = document.querySelector(".dalatechars")
let formdaltecards = document.querySelector(".delatecard")
let formdaltecapi = document.querySelector(".delatechar")

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

btnactulizar.addEventListener("click", () => {
    console.log("actulizar")
    actulizar.classList.replace("ocultar", "actulizar")
    agregar.classList.add("agregar")
    capituloactu.classList.add("ocultar-capi-act")
    capituloagregar.classList.add("ocultar-capi")
    mostrarTabla.classList.add("datos_ocul")
    mostrarVisitas.classList.add("datos_ocul-visit")
    formdaltecapi.classList.add("eliminarcapi")
    formdaltecards.classList.add("eliminarvol")
})

btnagregar.addEventListener("click", () => {
    console.log("agrega")
    actulizar.classList.replace("actulizar", "ocultar")
    agregar.classList.remove("agregar")
    capituloactu.classList.add("ocultar-capi-act")
    capituloagregar.classList.add("ocultar-capi")
    mostrarTabla.classList.add("datos_ocul")
    mostrarVisitas.classList.add("datos_ocul-visit")
    formdaltecapi.classList.add("eliminarcapi")
    formdaltecards.classList.add("eliminarvol")
})

btncapitagre.addEventListener("click", () => {
    actulizar.classList.replace("actulizar", "ocultar")
    capituloagregar.classList.remove("ocultar-capi")
    agregar.classList.add("agregar")
    capituloactu.classList.add("ocultar-capi-act")
    mostrarTabla.classList.add("datos_ocul")
    mostrarVisitas.classList.add("datos_ocul-visit")
    formdaltecapi.classList.add("eliminarcapi")
    formdaltecards.classList.add("eliminarvol")
})

btncapitact.addEventListener("click", () => {
    console.log("actulizar capitulo")
    capituloactu.classList.remove("ocultar-capi-act")
    actulizar.classList.replace("actulizar", "ocultar")
    agregar.classList.add("agregar")
    capituloagregar.classList.add("ocultar-capi")
    mostrarTabla.classList.add("datos_ocul")
    mostrarVisitas.classList.add("datos_ocul-visit")
    formdaltecapi.classList.add("eliminarcapi")
    formdaltecards.classList.add("eliminarvol")
})

btndatos.addEventListener("click", () => {
    capituloactu.classList.add("ocultar-capi-act")
    actulizar.classList.replace("actulizar", "ocultar")
    agregar.classList.add("agregar")
    capituloagregar.classList.add("ocultar-capi")
    mostrarTabla.classList.remove("datos_ocul")
    mostrarVisitas.classList.add("datos_ocul-visit")
    formdaltecapi.classList.add("eliminarcapi")
    formdaltecards.classList.add("eliminarvol")
})

visitas.addEventListener("click", () => {
    mostrarVisitas.classList.remove("datos_ocul-visit")
    mostrarTabla.classList.add("datos_ocul")
    capituloactu.classList.add("ocultar-capi-act")
    capituloagregar.classList.add("ocultar-capi")
    actulizar.classList.replace("actulizar", "ocultar")
    agregar.classList.add("agregar")
    formdaltecapi.classList.add("eliminarcapi")
    formdaltecards.classList.add("eliminarvol")
})

slider_menu.addEventListener("click", () => {
    slider.classList.toggle("slider-vertical-min")
    slider_menu.classList.toggle("menu-slider-min")
    slider_list.classList.toggle("list-slider-min")
    slideTitle.classList.toggle("ocultar-title")
})

opciones.forEach((opcion) => {
    opcion.addEventListener("click", (e) => {
        console.log("si funciona")
        e.stopPropagation();
    });
});


btndalatecards.addEventListener("click", () => {
    formdaltecards.classList.remove("eliminarvol")
    mostrarVisitas.classList.add("datos_ocul-visit")
    mostrarTabla.classList.add("datos_ocul")
    capituloactu.classList.add("ocultar-capi-act")
    capituloagregar.classList.add("ocultar-capi")
    actulizar.classList.replace("actulizar", "ocultar")
    agregar.classList.add("agregar")
    formdaltecapi.classList.add("eliminarcapi")
})

btndalatecapi.addEventListener("click", () => {
    formdaltecapi.classList.remove("eliminarcapi")
    mostrarVisitas.classList.add("datos_ocul-visit")
    mostrarTabla.classList.add("datos_ocul")
    capituloactu.classList.add("ocultar-capi-act")
    capituloagregar.classList.add("ocultar-capi")
    actulizar.classList.replace("actulizar", "ocultar")
    formdaltecards.classList.add("eliminarvol")
    agregar.classList.add("agregar")
})