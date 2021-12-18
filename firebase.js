// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDbFAR-GPGlL478ukuJFp5RvpTwF1k-Nao",
    authDomain: "twitter-clone-6bdee.firebaseapp.com",
    projectId: "twitter-clone-6bdee",
    storageBucket: "twitter-clone-6bdee.appspot.com",
    messagingSenderId: "612302974124",
    appId: "1:612302974124:web:74222095481b5fb5938309"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth(app)
const storage = getStorage();

export default app;
export { db, storage, auth };