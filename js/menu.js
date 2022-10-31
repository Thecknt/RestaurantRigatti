const carrito = document.getElementById('carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const platos = document.getElementById('platos');
const pagar = document.getElementById('pagar');
let total = document.getElementById('total');

let totalCart= 0

cargarEventListeners();

function cargarEventListeners() {
    platos.addEventListener('click', comprar);
    carrito.addEventListener('click', eliminarPlato);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', verLocalStorage);
}

function comprar(e) {
    e.preventDefault();
if(e.target.classList.contains('button-agregar')){
    totalCart;
    const plato = e.target.parentElement.parentElement;
    leerDatosPlatos(plato);

    }
    
}


function leerDatosPlatos(plato) {
    const infoPlatos = {
        imagen: plato.querySelector('img').src,
        titulo: plato.querySelector('h4').textContent,
        precio: plato.querySelector('#precio').textContent,
        id: plato.querySelector('a').getAttribute('data-id'),
    }
    totalCart = parseFloat(totalCart) + parseFloat(infoPlatos.precio) ;
    totalCart = totalCart.toFixed(2);
    insertarCarrito(infoPlatos);
}

function insertarCarrito(plato) {

const box = document.createElement('tr');
box.innerHTML = `
<td>
<img src="${plato.imagen} width=100 style="border-radius: 15px">
</td>
<td>${plato.titulo}</td>
<td>${plato.precio}</td>
<td>
<a href="#" class="vaciar-carrito" data-id="${plato.id}">x</a>
</td>`;

listaCarrito.appendChild(box);

total.innerHTML = totalCart;

guardarPlatoLocalStorage(plato);
}

function eliminarPlato(e) {
    e.preventDefault();

    let plato,
    platoId;

    if(e.target.classList.contains('vaciar-carrito')){
        e.target.parentElement.parentElement.remove();
        plato = e.target.parentElement.parentElement;
        platoId = plato.querySelector('a').getAttribute('data-id');
    }

    totalCart = parseFloat(totalCart) - parseFloat(totalCart);
    totalCart = totalCart.toFixed(2);
    eliminarPlatolocalStorage(platoId);
}

function vaciarCarrito() {
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

vaciarLocalStorage();
return false;
}

function guardarPlatoLocalStorage(plato) {
    let platos;

    platos = obtenerPlatosLocalStorage();

    platos.push(plato);

    localStorage.setItem('platos', JSON.stringify(platos));
}

function obtenerPlatosLocalStorage() {
    let platosLocal;
    
    if(localStorage.getItem('platos') === null) {
        platosLocal = [];
    } else {
        platosLocal = JSON.parse(localStorage.getItem('platos'));
    }
    return platosLocal;
    console.log(platosLocal)
}

function verLocalStorage() {
    let platosLocal;

    platosLocal = obtenerPlatosLocalStorage();

    platosLocal.forEach(function(plato) {
        const box = document.createElement('tr');
        box.innerHTML =`
        <td>
        <img src="${plato.imagen}" width=100 style="border-radius: 15px">
        </td>
        <td>${plato.titulo}</td>
        <td>${plato.precio}</td>
        <td>
        <a href="#" class="vaciar-carrito" data-id="${plato.id}">x</a>
        </td>`;

        listaCarrito.appendChild(box);

        total.innerHTML = totalCart;
    })
}

function eliminarPlatolocalStorage(plato){
    let platosLocal;

    platosLocal = obtenerPlatosLocalStorage();

    platosLocal.forEach(function(platosLocal, index){
        if(platosLocal.id === plato){
            platosLocal.splice(index,1);
        }
    });

    localStorage.setItem('platos', JSON.stringify(platosLocal));
}

function vaciarLocalStorage(){
    localStorage.clear();
    total.innerHTML = totalCart;
}

//const options = {
//	method: 'GET',
//	headers: {
//		'X-RapidAPI-Key': '40e35aac17mshd3c3d12e994417fp17646ajsnab8000a511b2',
//		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
//	}
//};

//fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Buenos%20Aires&format=json&u=f', options)
//	.then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));

	


//fetch('https://thecknt.github.io/platosapi/platos.json').then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));