// APLICANDO ARROW FUNCTION AL OBJETO DE REPRODUCTOR DE MÚSICA

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo la canción con el Id ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`... Borrando la Canción ${id}`),
    crearPlayList: nombre => console.log(`Creando la PlayList ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la PlayList con el nombre ${nombre}`),

    // Crear una nueva canción : set
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    // Obtener la información de la canción creada : get
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Dragon Force: Heroes of our time';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.reproducir(60);
reproductor.pausar();
reproductor.borrar(40);
reproductor.crearPlayList('Rap');
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Rap');
