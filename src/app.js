const connection = require("./db/connection");
const {
    addMovie,
    listMovies,
    deleteByTitle,
    updateRating
} = require("./utils");

const command = process.argv[2];

const app = async () => {
    if (command === "add") {
        await connection(addMovie, {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5],
            year: process.argv[6]
        });
    } else if (command === "list") {        
        await connection(listMovies, {});
    }else if(command==="deleteByTitle"){
        await connection(deleteByTitle,{title:process.argv[3]})
    } else if(command==="updateRating"){
        await connection(updateRating,{title:process.argv[3]},{rating:process.argv[4]})
    } 
       
    else {
        console.log("Incorrect Input")
    }
};

app();