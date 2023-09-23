// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4l_nY-uRlnAyyhQV7IAmmSJM0lIDsvIM",
  authDomain: "mylibrary-80fdc.firebaseapp.com",
  projectId: "mylibrary-80fdc",
  storageBucket: "mylibrary-80fdc.appspot.com",
  messagingSenderId: "505858078089",
  appId: "1:505858078089:web:7141754c7cc318b48ddd58",
  measurementId: "G-Z69TTPM772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
