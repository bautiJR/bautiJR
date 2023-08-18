const botonDesplegable = document.querySelector('.desplegable');
const contenido = document.querySelector('.contenido');

botonDesplegable.addEventListener('click', () => {
  if (contenido.style.display === 'none') {
    contenido.style.display = 'block';
  } else {
    contenido.style.display = 'none';
  }
});
