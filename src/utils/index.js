exports.addMovie = async (collection, dataObj) => {
    try{
        await collection.insertOne(dataObj)
        console.log(`The film <${dataObj.title}> has been added to your collection.`)
    } catch (error){
        console.log(error)
    }
};

exports.listMovies = async (collection) => {
    try {  
        console.log("Here is the complete list of films in this collection:")     
        console.log(await collection.find().toArray())
    } catch (error){
        console.log(error);
    }
};
exports.deleteByTitle = async (collection,dataObj) => {
    try {       
        await collection.deleteMany( dataObj )
        console.log(`All instances of the fimm entitled <${dataObj}> has been deleted.`)
    } catch (error){
        console.log(error);
    }
};
exports.updateRating = async (collection,dataObj,updateObj) => {
    try {       
        await collection.updateMany( dataObj,{$set: updateObj })
        console.log(`The film entitled <${dataObj.title}> has updated <actor> to <${updateObj.rating}>`)   
    } catch (error){
        console.log(error);
    }
};
exports.updateActor = async (collection,dataObj,updateObj) => {
    try {       
        await collection.updateMany( dataObj,{$set: updateObj })
        console.log(`The film entitled <${dataObj.title}> has updated <actor> to <${updateObj.actor}>`)
            } catch (error){
        console.log(error);
    }
};
exports.updateYear = async (collection,dataObj,updateObj) => {
    try {       
        await collection.updateMany( dataObj,{$set: updateObj })
        console.log(`The film entitled <${dataObj.title}> has updated <year> to <${updateObj.year}>`)
            } catch (error){
        console.log(error);
    }
};
exports.updateTitle = async (collection,dataObj,updateObj) => {
    try {       
        await collection.updateMany( dataObj,{$set: updateObj })
        console.log(`The film entitled <${dataObj.title}> has updated <title> to <${updateObj.title}>`)
            } catch (error){
        console.log(error);
    }
};
exports.findByTitle = async (collection,dataObj) => {
    try {       
        console.log(await collection.find(dataObj).toArray())        
            } catch (error){
        console.log(error);
    }
};
exports.findByActor = async (collection,dataObj) => {
    try {       
        console.log(await collection.find(dataObj).toArray())        
                   }             
            catch (error){
        console.log(error);
    }
};

