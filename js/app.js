const carrito =  document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
  //Agregar curso al acrrito.
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
  console.log(infoCurso);
}