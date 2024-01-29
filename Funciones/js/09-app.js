// FUNCIONES DENTRO DE OBJETOS : En ese contexto se les denomina Métodos

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo la canción con el Id ${id}`)
    },
    pausar: function () {
        console.log('Pausando...')
    },
    borrar: function (id) {
        console.log(`... Borrando la Canción ${id}`)
    },
    crearPlayList: function (nombre) {
        console.log(`Creando la PlayList ${nombre}`)
    },
    reproducirPlayList: function (nombre) {
        console.log(`Reproduciendo la PlayList con el nombre ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.reproducir(60);
reproductor.pausar();
reproductor.borrar(40);
reproductor.crearPlayList('Rap');
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Rap');
