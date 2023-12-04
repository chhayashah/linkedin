// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwJM5IlX9-h0HADlASan4-Z4sYYcP6WNo",
  authDomain: "linkedin-d3aff.firebaseapp.com",
  projectId: "linkedin-d3aff",
  storageBucket: "linkedin-d3aff.appspot.com",
  messagingSenderId: "400024356948",
  appId: "1:400024356948:web:815b7cd6b478c8045ec5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore= getFirestore(app);
const storage=getStorage(app);
export { auth, app, firestore, storage};