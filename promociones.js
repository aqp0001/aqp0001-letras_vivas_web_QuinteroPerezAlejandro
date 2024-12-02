document.addEventListener('DOMContentLoaded', () => {
    const botonesDescuento = document.querySelectorAll('.aplicar-descuento');

    botonesDescuento.forEach(boton => {
        boton.addEventListener('click', () => {
            const descuento = boton.closest('.promo-card').dataset.descuento;
            const genero = boton.dataset.genero;

            localStorage.setItem('descuento', descuento);
            localStorage.setItem('genero', genero);

            window.location.href = 'catalogo.html';
        });
    });
});
