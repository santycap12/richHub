const caja = document.querySelector('#caja');

caja.addEventListener('click', () => {
    const caja2 = document.createElement('div');
    caja2.classList.add('caja2');
    caja.appendChild(caja2);
});

caja.addEventListener('dblclick', limpiarHTML);

function limpiarHTML() {
    while (caja.firstChild) {
        caja.removeChild(caja.firstChild);
    };
};