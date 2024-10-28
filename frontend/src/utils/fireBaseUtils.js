// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhDblgyeIVpzPVn5C7nuI9REwfgXZADrw",
  authDomain: "alarry-clothier-d63b8.firebaseapp.com",
  projectId: "alarry-clothier-d63b8",
  storageBucket: "alarry-clothier-d63b8.appspot.com",
  messagingSenderId: "16648842772",
  appId: "1:16648842772:web:854b5a9d880404e24a4101",
  measurementId: "G-NF7ZHF6DTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);