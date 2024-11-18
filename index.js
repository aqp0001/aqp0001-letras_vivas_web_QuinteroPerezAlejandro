const audio = document.getElementById('audio');
        const muteButton = document.getElementById('boton_mutear');

        muteButton.addEventListener('click', () => {
            if (audio.muted) {
                audio.muted = false;
                muteButton.textContent = '🔊 Silenciar';
            } else {
                audio.muted = true;
                muteButton.textContent = '🔇 Activar sonido';
            }
        });
