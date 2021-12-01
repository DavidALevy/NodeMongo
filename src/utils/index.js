exports.addMovie = async (collection, dataObj) => {
    try{
        await collection.insertOne(dataObj)
    } catch (error){
        console.log(error)
    }
};

exports.listMovies = async (collection) => {
    try {       
        console.log(await collection.find().toArray())
    } catch (error){
        console.log(error);
    }
};
exports.deleteByTitle = async (collection,dataObj) => {
    try {       
        await collection.deleteMany( dataObj )
        console.log(dataObj)
    } catch (error){
        console.log(error);
    }
};
exports.updateRating = async (collection,dataObj,updateObj) => {
    try {       
        await collection.updateMany( dataObj,{$set: updateObj })
        console.log(dataObj)
        console.log(updateObj)
        
    } catch (error){
        console.log(error);
    }
};
