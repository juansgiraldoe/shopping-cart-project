const carrito =  document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito =[]

cargarEventListeners();
function cargarEventListeners() {
  //Agregar curso al carrito.
  listaCursos.addEventListener('click', agregarCurso)
};

//Funciones:
function agregarCurso(e) {
  e.preventDefault();
  if ( e.target.classList.contains('agregar-carrito') ) {
    const cursoSeleccionado = e.target.parentElement.parentElement//.children[1].children[0].textContent;
    readDocument(cursoSeleccionado);
  }
}

//Leemos el contenido del html al que dimos click y extrae la info del curso.

function readDocument(curso) {
  //Creamos un objeto con el contenido del curso actual.
  infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio .u-pull-right').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  }

  //Agrega elementos al arreglo del carrito.
  articulosCarrito =[...articulosCarrito, infoCurso]
  console.log(articulosCarrito);
  carritoHTML();
}

//Muestra los elementos en el HTML del carrito de compras.
function carritoHTML() {
  //Limpia el html.
  limpiarHmtl();

  //Recorre el carrito y genera el HTML.
  articulosCarrito.forEach( item => {
    const { imagen, titulo, precio, cantidad, id } = item
    const row = document.createElement('tr')
    row.innerHTML = `
    <td><img src='${imagen}' width='100'></td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>
      <a href='#' class='borrar-curso' data-id='${id}'> X </a>
    </td>
    `;

    //Agrega el hml al tbody
    contenedorCarrito.appendChild(row)
  });

  function limpiarHmtl() {
    //Forma lenta.
    //contenedorCarrito.innerHTML = '';
    //Mejor performance.
    while ( contenedorCarrito.firstChild ) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

  }
}