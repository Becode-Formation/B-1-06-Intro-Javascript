let readLine = require('readline-sync');

let askTvSerie = () => {
    let nameSerie = readLine.question("What's the name of the serie ?");
    let yearSerie = readLine.question("What's the production year's of this serie ?");
    let castUser = readLine.question("Whats the cast of this serie ? (separete by a ',').");

    userFavSerie.name = nameSerie;
    userFavSerie.productionYear = yearSerie;
    let cast = castUser.split(","); // Permet de récupérer chaque cast séparé par une virgule
    userFavSerie.cast = cast;
}

let userFavSerie = {
    name : " ",
     productionYear: " ",
     cast: [],
}


let randomizeCast = (tvSerie) => { // Prendre la liste des cast et les  sortir aléatoirement
    //VARIABLE castNumber est EGALE à la taille du tableau cast
    //Initialiser le random a la taille du tableau de cast
    // POUR CHAQUE element du tableau   
        // RANDOM un nombre 
        // ATTRIBUER à l'element le nombre RANDOM 
    askTvSerie();
    for(let i = tvSerie.cast.length - 1; i > 0; i -- ) {
         const j = Math.floor(Math.random() * i);
         const temp = tvSerie.cast[i];
         tvSerie.cast[i] = tvSerie.cast[j];
         tvSerie.cast[j] = temp;
    }

    return console.log(tvSerie.cast);
}

randomizeCast(userFavSerie);