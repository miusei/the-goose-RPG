//Menu responsivo!

var estado = document.querySelector(".Menus")

function clickMenu(){
    if (estado.style.display == 'block'){
        estado.style.display = 'none'
    } else {
        estado.style.display = 'block'
    }
}