const {MongoClient}= require("mongodb");
require ("dotenv").config();

const client =new MongoClient(process.env.MONGO_URI)
const connection=async (crudfunc,dataOb)=>{
    try{
        await client.connect();
        console.log("connection")
        const db= client.db("newTestDb")
        const collection=db.collection("movies");
        console.log(await collection.findOne({name:"Spiderman"}))
        await collection.insertOne({name:"Spiderman"})
        client.close();
    }catch(error){
        console.log(error);
    }
};
connection();
