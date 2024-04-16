// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTx_I63MQdykx-uMXArZr0x4O6NeJ1OOQ",
  authDomain: "mern-book-inventory-93cce.firebaseapp.com",
  projectId: "mern-book-inventory-93cce",
  storageBucket: "mern-book-inventory-93cce.appspot.com",
  messagingSenderId: "773144667900",
  appId: "1:773144667900:web:83f8d9219b693279bd9979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;