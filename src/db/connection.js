const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI)
const connection = async (crudFunc, dataOb,updateObj) => {
    try {
        await client.connect();
        console.log("connection successful")
        const collection = client.db("newTestDb").collection("movies");
        await crudFunc(collection, dataOb,updateObj)
        client.close();
    } catch (error) {
        console.log(error);
    }
};
module.exports = connection;
