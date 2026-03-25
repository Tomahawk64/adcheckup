import { MongoClient } from 'mongodb';

// Lazily initialised — connection is only established on the first API call,
// not at module evaluation time (avoids build-time errors if MONGODB_URI is
// not available in the build environment).
let clientPromise = null;

/** Returns a connected MongoClient promise, cached for the process lifetime. */
export default function getMongoClientPromise() {
  if (clientPromise) return clientPromise;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  if (process.env.NODE_ENV === 'development') {
    // In dev, cache on the global object so hot-reloads reuse the connection.
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = new MongoClient(uri).connect();
  }

  return clientPromise;
}
