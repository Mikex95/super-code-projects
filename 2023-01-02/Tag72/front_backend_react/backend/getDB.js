const { MongoClient } = require("mongodb");
const dotenv = require("dotenv")

dotenv.config()
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB_NAME;

let dbReference = null;

function getDB() {
    if (dbReference) {
        return Promise.resolve(dbReference)
    } else {
        console.log("Connecting to databse for first time.." , url);
        const client = new MongoClient(url)
        return client
        .connect()
        .then((connectedClient) => connectedClient.db(dbName))
        .then((db) => {
            dbReference =db;
            return dbReference;
        })
    }
}

module.exports = {
    getDB,
}