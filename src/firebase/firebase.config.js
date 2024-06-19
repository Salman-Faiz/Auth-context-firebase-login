// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWDwEiJobyFK18hyItw0uvrMlrCMbBbGc",
  authDomain: "auth-context-firebase-lo-ac6b5.firebaseapp.com",
  projectId: "auth-context-firebase-lo-ac6b5",
  storageBucket: "auth-context-firebase-lo-ac6b5.appspot.com",
  messagingSenderId: "830651280521",
  appId: "1:830651280521:web:5cf1b5c3714949a522ea58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;                
