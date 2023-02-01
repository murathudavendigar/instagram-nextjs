// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRop7RTAL73XsWl-IO49ZalNcXsC44jws",
  authDomain: "instagram-nextjs-3d2ca.firebaseapp.com",
  projectId: "instagram-nextjs-3d2ca",
  storageBucket: "instagram-nextjs-3d2ca.appspot.com",
  messagingSenderId: "358682315274",
  appId: "1:358682315274:web:0dcfd9178d26eca4982df3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
