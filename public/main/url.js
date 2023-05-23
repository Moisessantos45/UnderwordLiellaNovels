let link = document.querySelectorAll(".figure a")
console.log(link)
link.forEach(lin => {
    if (lin.href === "#" || lin.href.endsWith("#")) {
        lin.addEventListener("click", evt => {
            evt.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Volumen no disponible',
                showConfirmButton: false,
                timer: 3500,
                width: '20em'
            });
        })
    } else {
        lin.setAttribute("target", "_blank")
    }
})

let linkc = document.querySelectorAll(".capit a")
console.log(linkc)
linkc.forEach(lin => {
    if (lin.href === "#" || lin.href.endsWith("#")) {
        lin.addEventListener("click", evt => {
            evt.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Capitulo no disponible',
                showConfirmButton: false,
                timer: 3500,
                width: '20em'
            });
        })
    } else {
        lin.setAttribute("target", "_blank")
    }
})
