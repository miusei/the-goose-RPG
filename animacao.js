/* Animação de typewrite */

const titulo = document.querySelector('.Menu-Titulo')
typeWriter (titulo);

function typeWriter (elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML= ('');
    textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });
}

/* Fim da animação typewrite */