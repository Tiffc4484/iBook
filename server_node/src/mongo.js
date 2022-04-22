const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
let client, db;

async function connect() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Connecting to the database.");
/*        client = new MongoClient(url, { useUnifiedTopology: true });
        console.log("Connecting to the database.");
        await client.connect();
        console.log("Connected.");
        db = client.db("iBook_database");*/
    } catch (e) {
        console.log("Something went wrong with Database connection");
        //process.exit(1);
/*        client.close().catch(console.log);
        console.log("Error ", e);
        throw e;*/
    }
}

// function getCollection(collectionName) {
//     return db.collection(collectionName);
// }

module.exports = {
    //connect,
    //getCollection,
};

