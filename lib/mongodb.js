import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let cachedClient = null;
let cachedDb = null;
let cachedUri = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb && cachedUri === uri) {
    try {
      await cachedClient.db("admin").command({ ping: 1 });
      return { client: cachedClient, db: cachedDb };
    } catch {
      cachedClient = null;
      cachedDb = null;
      cachedUri = null;
    }
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000,
  });
  await client.connect();

  cachedClient = client;
  cachedDb = client.db();
  cachedUri = uri;

  return { client: cachedClient, db: cachedDb };
}

export default connectToDatabase;
