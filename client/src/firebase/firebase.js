// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2uRKhYiGVIB8InnvAJo8bgq2V56TmusE",
  authDomain: "mylibrary-e13c2.firebaseapp.com",
  projectId: "mylibrary-e13c2",
  storageBucket: "mylibrary-e13c2.appspot.com",
  messagingSenderId: "349947484798",
  appId: "1:349947484798:web:736cde28d28a3473d4962f",
  measurementId: "G-5RF8N635Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


console.log(auth, analytics)
export {auth, analytics};