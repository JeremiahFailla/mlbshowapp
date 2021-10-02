// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbasau3ZQW7QM2ySN4f26dA7jxvXODJ-o",
  authDomain: "mlbshowapp.firebaseapp.com",
  projectId: "mlbshowapp",
  storageBucket: "mlbshowapp.appspot.com",
  messagingSenderId: "914571557168",
  appId: "1:914571557168:web:8d6aaa0d14fe1772b070f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
