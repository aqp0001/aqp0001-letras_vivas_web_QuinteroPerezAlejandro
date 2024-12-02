document.addEventListener('DOMContentLoaded', () => {
    const botonesReservar = document.querySelectorAll('.btn-formulario');

    botonesReservar.forEach((boton) => {
        boton.addEventListener('click', () => {
            const libro = boton.closest('.reserva-contenedor');
            
            const imagenSrc = libro.querySelector('.reserva-imagen img').src;

            const titulo = libro.querySelector('#titulo1') ? libro.querySelector('#titulo1').textContent :
                           libro.querySelector('#titulo2') ? libro.querySelector('#titulo2').textContent :
                           libro.querySelector('#titulo3') ? libro.querySelector('#titulo3').textContent :
                           libro.querySelector('#titulo4').textContent;

            const precio = libro.querySelector('#precio1') ? libro.querySelector('#precio1').textContent :
                           libro.querySelector('#precio2') ? libro.querySelector('#precio2').textContent :
                           libro.querySelector('#precio3') ? libro.querySelector('#precio3').textContent :
                           libro.querySelector('#precio4').textContent;

            const reserva = {
                titulo,
                precio,
                imagenSrc
            };

            const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
            reservas.push(reserva);
            localStorage.setItem('reservas', JSON.stringify(reservas));

            alert(`${titulo} ha sido añadido al carrito.`);
        });
    });
});
