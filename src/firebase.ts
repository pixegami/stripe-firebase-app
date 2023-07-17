// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOgRIYUtMK6RbGC02S8xVEIzp4Gff9rLw",
  authDomain: "px-stripe-app.firebaseapp.com",
  projectId: "px-stripe-app",
  storageBucket: "px-stripe-app.appspot.com",
  messagingSenderId: "108485792446",
  appId: "1:108485792446:web:bea0c8af706f00835684ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
