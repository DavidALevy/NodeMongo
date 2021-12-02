const connection = require("./db/connection");
const {
    addMovie,
    listMovies,
    deleteByTitle,
    updateRating,
    updateActor,
    updateYear,
    updateTitle,
    findByTitle,
    findByActor
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
    } else if(command==="updateActor"){
        await connection(updateActor,{title:process.argv[3]},{actor:process.argv[4]})
    } 
    else if(command==="updateYear"){
        await connection(updateYear,{title:process.argv[3]},{year:process.argv[4]})
    } 
    else if(command==="updateTitle"){
        await connection(updateTitle,{title:process.argv[3]},{title:process.argv[4]})
    }   
    else if(command==="findByTitle"){
        await connection(findByTitle,{title:process.argv[3]})
    } 
    else if(command==="findByActor"){
        await connection(findByActor,{actor:process.argv[3]})
    } 
    else {
        console.log("Incorrect Input")
    }
};

app();