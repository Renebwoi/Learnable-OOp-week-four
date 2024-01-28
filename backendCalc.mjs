export const movies = [
    {
        name: "Moana",
        Year: 2016,
        genre: "cartoon"
    },
    {
        name: "John Wick",
        Year: 2020,
        genre: "Thriller"
    },
    {
        name: "Chucky",
        Year: 2010,
        genre: "cartoon"
    }
]

export let users = [
    {
        name: "Jonas",
        moviesOwned: []
    },
    {
        name: "Silas",
        moviesOwned: []
    },
    {
        name: "Subahn",
        moviesOwned: []
    },
]

export function rentMovie(
    movieName, 
    rentee, 
    movieArray = movies, 
    UserArray = users) {

//  console.log(`
//  movie name ${movieName}
//  rentee ${rentee}
//  movies ${movieArray[0].genre}
//  Users ${UserArray[2].name}
//  `)
for (let i=0; i<movieArray.length; i++){
    if (movieName == movieArray[i].name){
       var removedMovie = movieArray.splice(i,1)
       console.log(`${removedMovie[0].name} removed, Movies left ${movieArray.length}`)
    }}
// console.log(removedMovie)
for (let x =0; x<UserArray.length; x++){
    if(rentee==UserArray[x].name){
        UserArray[x].moviesOwned.push(removedMovie)
        console.log(`${removedMovie[0].name} has been rented out to ${rentee}`)
    }}
}

// rentMovie("Moana","Jonas")
// rentMovie("Chucky","Jonas")

export function returnMovie(
    movieName, 
    rentee, 
    movieArray = movies, 
    UserArray = users) {
        for (let x =0; x<UserArray.length; x++){
            if(rentee==UserArray[x].name){
                for(let b=0; b<UserArray[x].moviesOwned.length;b++){
                    // console.log(UserArray[x].moviesOwned[b][0].name)
                    if(movieName==UserArray[x].moviesOwned[b][0].name){
                        // console.log(`found`)
                        movieArray.push(UserArray[x].moviesOwned[b][0])
                        console.log(`${movieName} has been returned to the movie library.\n Amount of movies in library is ${movieArray.length}`)
                    }
                }
            }}
}
// returnMovie("Moana","Jonas")
