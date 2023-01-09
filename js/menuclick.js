function clickMenu(){

    var estado = document.querySelector(".Menus")
    var estadoCor = document.querySelector(".Menu-Superior")

    if (estado.style.display == 'block'){
        estado.style.display = 'none'
    } else {
        estado.style.display = 'block'
    }
}

