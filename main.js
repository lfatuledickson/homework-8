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

const ul = document.querySelector("ul");
const myFavoriteMovies = [venom, ipMan, interstellar];






    let keys = myFavoriteMovies.map(function(i) {
       return `
            <li>Name: ${i.name}</li>
            <li>Year: ${i.year}</li>
            <li>Director: ${i.director}</li>
            <li><img src="${i.picture}"></li>
        `
    });

    let listContent = document.createElement("p");   
    listContent.innerHTML = keys; 

    ul.appendChild(listContent);





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



// const yearKey = myFavoriteMovies.map(function(yearTake) {
    //     yearTake = myFavoriteMovies[i].year;
    //     return `
    //         <li>Year: ${yearTake}</li>
    //     `
    // })
    // ol.appendChild(yearKey);


    // const directorKey = myFavoriteMovies.map(function(directorTake) {
    //     directorTake = myFavoriteMovies[i].director;
    //     return `
    //         <li>Director: ${directorTake}</li>
    //     `
    // })
    // ol.appendChild(directorKey);


    // const pictureKey = myFavoriteMovies.map(function(pictureTake) {
    //     pictureTake = myFavoriteMovies[i].picture;
    //     return `
    //     <li><img src="${yearTake}"></li>
    // `
    // })
    // ol.appendChild(pictureKey);

