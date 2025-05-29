import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics'; // Disabled for Node.js environment
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_API_KEY : import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_AUTH_DOMAIN : import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_DATABASE_URL : import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_PROJECT_ID : import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_STORAGE_BUCKET : import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_MESSAGING_SENDER_ID : import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_APP_ID : import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: typeof process !== 'undefined' ? process.env.VITE_FIREBASE_MEASUREMENT_ID : import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app); // Disabled for Node.js environment
const rtdb = getDatabase(app);

export { db, rtdb };
