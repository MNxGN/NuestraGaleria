const playlist = [
    { titulo: "Nuts", artista: "Lil Peep", imagen: "foto1.jpg", audio: "cancion1.mp3" },
    { titulo: "I Wanna Be Yours", artista: "Arctic Monkeys", imagen: "foto2.jpg", audio: "cancion2.mp3" },
    { titulo: "My One and Only Love", artista: "Mon Laferte", imagen: "foto3.jpg", audio: "cancion3.mp3" },
    { titulo: "Feel it", artista: "d4vd", imagen: "foto4.jpg", audio: "cancion4.mp3" },
    { titulo: "Lover Rock", artista: "TV Girl", imagen: "foto5.jpg", audio: "cancion5.mp3" },
    { titulo: "Tu manta", artista: "Milo J", imagen: "foto6.jpg", audio: "cancion6.mp3" },
    { titulo: "P.S I love you", artista: "The Beatles", imagen: "foto7.jpg", audio: "cancion7.mp3" },
    { titulo: "Self Aware", artista: "Tini", imagen: "foto8.jpg", audio: "cancion8.mp3" },
    { titulo: "Cafuné", artista: "Micro TDH", imagen: "foto9.jpg", audio: "cancion9.mp3" },
    { titulo: "M.A.I", artista: "Milo J", imagen: "foto10.jpg", audio: "cancion10.mp3" }
];

const contenedor = document.getElementById('galeria');

// Variable para rastrear qué botón estuvo sonando recientemente
let cancionActiva = null;
let reproductorActivo = null;

playlist.forEach(cancion => {
    const marco = document.createElement('div');
    marco.className = 'marco-cuadro';

    // Creamos el reproductor de audio para esta tarjeta
    const audioFondo = new Audio(cancion.audio);

    marco.innerHTML = `
        <div class="spotify-card">
            <div class="spotify-header">
                <i class="fa-brands fa-spotify"></i>
                <span>||| | || || | ||| |</span>
            </div>
            
            <img src="${cancion.imagen}" alt="Foto" class="imagen-portada">
            
            <div class="info-cancion">
                <div class="textos">
                    <div class="titulo">${cancion.titulo}</div>
                    <div class="artista">${cancion.artista}</div>
                </div>
                <i class="fa-solid fa-heart corazon"></i>
            </div>
            
            <div class="barra-progreso"></div>
            
            <div class="controles">
                <i class="fa-solid fa-shuffle"></i>
                <i class="fa-solid fa-backward-step"></i>
                <i class="fa-solid fa-circle-play btn-play"></i>
                <i class="fa-solid fa-forward-step"></i>
                <i class="fa-solid fa-repeat"></i>
            </div>
        </div>
    `;

    const btnPlay = marco.querySelector('.btn-play');
    
    btnPlay.addEventListener('click', () => {
        // Si hay una canción sonando diferente a la que acabo de presionar
        if (reproductorActivo && reproductorActivo !== audioFondo) {
            reproductorActivo.pause(); // Pausamos el audio anterior
            reproductorActivo.currentTime = 0; // Reiniciamos el tiempo del audio anterior
            
            // Regresamos el botón anterior a su icono de Play original
            if (cancionActiva) {
                cancionActiva.classList.replace('fa-circle-pause', 'fa-circle-play');
            }
        }

        // Lógica de reproducción para el botón actual
        if (audioFondo.paused) {
            audioFondo.play();
            btnPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
            
            // Guardamos el estado de este elemento como el activo actualmente
            reproductorActivo = audioFondo;
            cancionActiva = btnPlay;
        } else {
            audioFondo.pause();
            btnPlay.classList.replace('fa-circle-pause', 'fa-circle-play');
            
            // Limpiamos el registro si se pone pausa manualmente
            reproductorActivo = null;
            cancionActiva = null;
        }
    });

    contenedor.appendChild(marco);
});