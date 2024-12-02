document.addEventListener('DOMContentLoaded', () => {
    const pedidoContainer = document.querySelector('.pedido-container');

    if (!pedidoContainer) {
        console.error('El contenedor con clase "pedido-container" no existe en el DOM.');
        return;
    }

    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    if (reservas.length === 0) {
        pedidoContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    let sumatorio = 0; // Iniciar el sumatorio en 0

    reservas.forEach(reserva => {
        const div = document.createElement('div');
        div.classList.add('pedido'); 
        div.innerHTML = `
            <img src="${reserva.imagenSrc}" alt="${reserva.titulo}" width="150px">
            <h3>Producto Añadido</h3>
            <p>Precio: ${reserva.precio}</p>
        `;

        sumatorio += sumatorio + reserva.precio;

        pedidoContainer.appendChild(div);
    });

    const subtotalContainer = document.getElementById('subtotal');
    if (subtotalContainer) {
        subtotalContainer.textContent = `€${sumatorio}`;
    }
});
