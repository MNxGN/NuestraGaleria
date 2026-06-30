// Tu lista de canciones y fotos
const playlist = [
    { titulo: "Nuts", artista: "Lil Peep", imagen: "foto1.jpg" },
    { titulo: "I Wanna Be Yours", artista: "Arctic Monkeys", imagen: "foto2.jpg" },
    { titulo: "My One and Only Love", artista: "Mon Laferte", imagen: "foto3.jpg" },
    { titulo: "Feel it", artista: "d4vd", imagen: "foto4.jpg" },
    { titulo: "Lover Rock", artista: "TV Girl", imagen: "foto5.jpg" },
    { titulo: "Tu manta", artista: "Milo J", imagen: "foto6.jpg" },
    { titulo: "P.S I love you", artista: "Tu Artista", imagen: "foto7.jpg" },
    { titulo: "Self Aware", artista: "Tu Artista", imagen: "foto8.jpg" },
    { titulo: "Cafuné", artista: "Micro TDH", imagen: "foto9.jpg" },
    { titulo: "M.A.I", artista: "Milo J", imagen: "foto10.jpg" }
];

const contenedor = document.getElementById('galeria');

// Función para generar las tarjetas
playlist.forEach(cancion => {
    // Creamos el marco exterior
    const marco = document.createElement('div');
    marco.className = 'marco-cuadro';

    // Insertamos el HTML interno de la tarjeta usando los datos de tu lista
    marco.innerHTML = `
        <div class="spotify-card">
            <div class="spotify-header">
                <i class="fa-brands fa-spotify"></i>
                <span>||| | || || | ||| |</span>
            </div>
            
            <img src="${cancion.imagen}" alt="Foto de nosotros" class="imagen-portada">
            
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

    contenedor.appendChild(marco);
});

// Pequeño script para que al tocar el botón de play, cambie al de pausa (solo visual)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('fa-circle-play')) {
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    } else if (e.target.classList.contains('fa-circle-pause')) {
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
    }
});