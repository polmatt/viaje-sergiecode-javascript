import { barcelona, roma, paris, londres } from './ciudades.js'

//obtener elementos del dom
let enlaces = document.querySelectorAll('a') 
let tituloElemento = document.getElementById('titulo') 
let precioElemento = document.getElementById('precio') 
let subTituloElemento = document.getElementById('subtitulo') 
let parrafoElemento = document.getElementById('parrafo') 

//agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
//REMOVER EL ACTIVO
    enlaces.forEach(function (enlace) {
        enlace.classList.remove('active');
        
});
//Agregar la clase active al enlace actual
    this.classList.add('active')

// obtener el contenido 
    let contenido = obtenerContenido(this.textContent)

    tituloElemento.innerHTML = contenido.titulo
    precioElemento.innerHTML = contenido.precio
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo

    })
});

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona, //Barcelona que esta en la tabla html, va a devolver barcelona que es el objeto
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace]
    
}

