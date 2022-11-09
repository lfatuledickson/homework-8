
let venom = {
    name: "Venom",
    year: "2018",
    director: "Ruben Fleischer",
    picture: "https://m.media-amazon.com/images/M/MV5BNTFkZjdjN2QtOGE5MS00ZTgzLTgxZjAtYzkyZWQ5MjEzYmZjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
}

let ipMan = {
    name: "Ip Man",
    year: "2008",
    director: "Wilson Yip",
    picture: "https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
}

let interstellar = {
    name: "Interstellar",
    year: "2014",
    director: "Christopher Nolan",
    picture: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
}

const ol = document.querySelector("ol");
const myFavoriteMovies = [venom, ipMan, interstellar];



for(let i = 0; i < myFavoriteMovies.length; i++) {
        

    const nameKey = myFavoriteMovies.map(function(nameTake) {
        nameTake = myFavoriteMovies[i].name;
        return `
            <li>Name: ${nameTake}</li>
        `
    })
    ol.appendChild(nameKey);


    const yearKey = myFavoriteMovies.map(function(yearTake) {
        yearTake = myFavoriteMovies[i].year;
        return `
            <li>Year: ${yearTake}</li>
        `
    })
    ol.appendChild(yearKey);


    const directorKey = myFavoriteMovies.map(function(directorTake) {
        directorTake = myFavoriteMovies[i].director;
        return `
            <li>Director: ${directorTake}</li>
        `
    })
    ol.appendChild(directorKey);


    const pictureKey = myFavoriteMovies.map(function(pictureTake) {
        pictureTake = myFavoriteMovies[i].picture;
        return `
        <li><img src="${yearTake}"></li>
    `
    })
    ol.appendChild(pictureKey);


}



// const template = `
//     <h1></h1>
//     <h3></h3>
//     <h3></h3>
//     <img src="${interstellar.picture}">
// `






// // for(i = 0; i < myFavoriteMovies.length; i++) {
//     let listFiller = ol.appendChild("li")
//     let liElement = myFavoriteMovies[i].map(function(keys) {
//         return listFiller.
//         myFavoriteMovies[];
//     })
// }




