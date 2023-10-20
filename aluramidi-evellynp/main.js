function tocaSom (idELementoAudio) {
document.querySelector(idELementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll ('.tecla');

for (let contador =0;contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
const idAudio = '#som_${instrumento}';

tecla.onclick = function () 
