// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHkEGterdgfkEWSyD18G4iLOOqF3rnNXU",
  authDomain: "kafce-4396e.firebaseapp.com",
  projectId: "kafce-4396e",
  storageBucket: "kafce-4396e.appspot.com",
  messagingSenderId: "316613095428",
  appId: "1:316613095428:web:dbd54be19af165de25c551"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;