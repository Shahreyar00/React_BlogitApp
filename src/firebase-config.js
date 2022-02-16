import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUQa5q1mKVsoDKHKWKD75LqFKkqt6fR9Y",
  authDomain: "combinedfinalapp.firebaseapp.com",
  projectId: "combinedfinalapp",
  storageBucket: "combinedfinalapp.appspot.com",
  messagingSenderId: "709219390907",
  appId: "1:709219390907:web:474789b7a3661e694da09e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();