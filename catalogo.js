    document.addEventListener('DOMContentLoaded', () => {
        const descuento = localStorage.getItem('descuento');
        const genero = localStorage.getItem('genero');

        if (descuento && genero) {
            const libros = document.querySelectorAll('.reserva-contenedor');

            libros.forEach(libro => {
                const titulo = libro.querySelector('.reserva-detalles h3 strong').textContent.toLowerCase();
                
                if (titulo.includes(genero)) {
                    const precioElemento = libro.querySelector('.reserva-detalles h3 strong:last-child');
                    const precioActual = parseFloat(precioElemento.textContent.replace('€', ''));
                    
                    const precioConDescuento = (precioActual * (1 - descuento / 100)).toFixed(2);
                    precioElemento.textContent = `${precioConDescuento}€`;
                }
            });

            localStorage.removeItem('descuento');
            localStorage.removeItem('genero');
        }
    });
