////////////// FUNCION IIFE GLOBAL PARA RECIBIR URL Y LA ID //////////////////

let iifeFunction = (() => {
//////////////////////////// FUNCION PRIVADA: obtiene la ID y modifica la URL en el atributo SRC ////////////
    let getIdModifyUrl = (url,id) => {
        id.setAttribute('src', url);
    };
//////////////// FUNCION PUBLICA: llama a la función privada pasandole un url y una id (Estas se obtienen de la instancia creada por la clase "Reproductor") //////////////////////////////
    return {
        publicgetIdModifyUrl: (url,id) => getIdModifyUrl(url,id),
    };
})();


/////////////////// CLASES //////////////////

class Multimedia {
    constructor (url) {
        this._url = url;
    }

    get url() {
        return this._url
    }

    setStart () {
        return `Este método es para realizar un cambio en la URL del video;`
    };
}

class Reproductor extends Multimedia {
    constructor (url, id) {
        super (url)
        this.id = id;
        let _id = id;

        this.getId = ()=> _id;
    }

    setStart (tiempo) {
        this.getId().setAttribute('src',`${this.url}?start=${tiempo}`)
        //this._url += `?start=${time}`
        //super._url += `?start=${time}`
        // CON ESTE SUPER SETIAMOS LA VARIABLE "PRIVADA" DEL SUPER
    }

    playMultimedia() {
        /////////////////////// LLAMADO A LA FUNCION PUBLICA DESDE EL METODO PLAYMULTIMEDIA: este es el metodo que nos permite ejecutar todo lo de la funcion IIFE ///////////////////////
        iifeFunction.publicgetIdModifyUrl(this.url,this.getId());
       
    }
}

///////////// INSTANCIAS //////////////

let playMusica = new Reproductor("https://www.youtube.com/embed/bEQtkLNTmRs",musica);
playMusica.playMultimedia();
playMusica.setStart(200);
let playPeliculas = new Reproductor("https://www.youtube.com/embed/kVrqfYjkTdQ",peliculas);
playPeliculas.playMultimedia();
playPeliculas.setStart(10);
let playSeries = new Reproductor("https://www.youtube.com/embed/ByMrJy5p7q8",series);
playSeries.playMultimedia();
playSeries.setStart(5);

///////////////////////////////////////////////////

// SELECCIONAR ID DEL IFRAME Y CREACIÓN DE INSTANCIAS

// const iframeMusica = document.querySelector("#musica");
// const iframePeliculas = document.querySelector("#peliculas");
// const iframeSeries = document.querySelector("#series");

// const repMusica = new Reproductor("https://www.youtube.com/embed/bEQtkLNTmRs", "#musica")
// const repPeliculas = new Reproductor("https://www.youtube.com/embed/kVrqfYjkTdQ", "#peliculas")
// const repSeries = new Reproductor("https://www.youtube.com/embed/ByMrJy5p7q8", "#series")

// ESTABLECER TIEMPO INICIAL VIDEO

// repMusica.setInicio(60);
// repPeliculas.setInicio(1);


// HEADING 1, 2 Y 3 ESTAN EN ORDEN CORRESPONDIENTE A MUSICA, PELICULAS, SERIES

// const headingOneElement = document.querySelector("#headingOne");
// headingOneElement.addEventListener("click", function () {
//     repMusica.playMultimedia();
// });


// const headingTwoElement = document.querySelector("#headingTwo");
// headingTwoElement.addEventListener("click", function() {
//     repPeliculas.playMultimedia();
// });


// const headingThreeElement = document.querySelector("#headingThree");
// headingThreeElement.addEventListener("click", function() {
//     repSeries.playMultimedia();
// });


