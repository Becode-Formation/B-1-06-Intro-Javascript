let readLine = require('readline-sync');

let askTvSerie = () => {
    let nameSerie = readLine.question("What's the name of the serie ?");
    let yearSerie = readLine.question("What's the production year's of this serie ?");
    let castUser = readLine.question("Whats the cast of this serie ? (separete by a ',').");

    userFavSerie.name = nameSerie;
    userFavSerie.productionYear = yearSerie;
    let cast = castUser.split(","); // Permet de récupérer chaque cast séparé par une virgule
    userFavSerie.cast = cast;

   console.log(JSON.stringify(userFavSerie));
}

let userFavSerie = {
    name : " ",
     productionYear: " ",
     cast: [],
}

askTvSerie();