// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgL6M0A_5PYWAWzHxS4vN-4qstXunzlbw",
  authDomain: "simple-firebase-autecation.firebaseapp.com",
  projectId: "simple-firebase-autecation",
  storageBucket: "simple-firebase-autecation.appspot.com",
  messagingSenderId: "613686619933",
  appId: "1:613686619933:web:6dcdfe5056e6382d43bbf4",
  measurementId: "G-85Q33VSTFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;