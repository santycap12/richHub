const caja = document.querySelector('#caja');
const caja2 = document.createElement('div');
const caja3 = document.createElement('div');
caja2.id = "caja2";
caja3.id = "caja3";

caja.addEventListener('click', () => {
    caja.appendChild(caja2);
    caja2.addEventListener('click', () => {
        caja2.appendChild(caja3);
    });
});

caja.addEventListener('dblclick', limpiarHTML);

function limpiarHTML() {
    while (caja.firstChild) {
        while (caja2.firstChild) {
            caja2.removeChild(caja2.firstChild);
        };
        caja.removeChild(caja.firstChild);
    };
};