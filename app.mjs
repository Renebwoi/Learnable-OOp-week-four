import {users,movies,rentMovie,returnMovie } from "./backendCalc.mjs";

// rentMovie("Moana","Jonas")
// rentMovie("Chucky","Jonas")

// returnMovie("Moana","Jonas")

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';



let rl = readline.createInterface({ input, output });

console.log(`We have ${movies.length} movies. They are ${displayMovieName(movies)}`)
console.log(`We also have ${users.length} users. They are ${displayMovieName(users)}`)

const movieToRent = await rl.question('Select a movie to rent out ');

const r2 = readline.createInterface({ input, output });
const userRentedTo = await r2.question('Select a user to rent it to ');

// console.log(`Thank you for your valuable feedback: ${answer} and ${answer1}`);

rentMovie(movieToRent, userRentedTo)

const r3 = readline.createInterface({ input, output });
const returnal = await r2.question('Do you want to return the movie? (y/n) ');

if (returnal=="y") { returnMovie(movieToRent, userRentedTo) }
else if (returnal=="n") {console.log(`Movie library has ${movies.length} movies.\n Jonas has ${users[0].moviesOwned.length}\n Silas has ${users[1].moviesOwned.length} \n Subahn has ${users[2].moviesOwned.length}`)}

rl.close();







//helper functions
function displayMovieName(movies) {
    let movieNameDisplay = " ";

    for (let x=0;x<movies.length;x++){
        movieNameDisplay += movies[x].name
        movieNameDisplay += ", "

    }

    return movieNameDisplay
}