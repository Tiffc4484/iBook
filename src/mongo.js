const { MongoClient } = require("mongodb");
const url = process.env.MONGO_URL;
//const url = "mongodb+srv://tiffanychen:A1fal4khAfBLpk7J@ibook.qkr0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let client, db;

async function connect() {
    try {
        client = new MongoClient(url, { useUnifiedTopology: true });
        console.log("Connecting to the database.");
        await client.connect();
        console.log("Connected.");
        db = client.db("iBook_database");
    } catch (e) {
        client.close().catch(console.log);
        console.log("Error ", e);
        throw e;
    }
}

function getCollection(collectionName) {
    return db.collection(collectionName);
}

module.exports = {
    connect,
    getCollection,
};

