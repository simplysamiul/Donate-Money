// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_8PB48DwplOydOfzaTGEYiG4xwMhEOAk",
  authDomain: "donate-auth.firebaseapp.com",
  projectId: "donate-auth",
  storageBucket: "donate-auth.firebasestorage.app",
  messagingSenderId: "349048131216",
  appId: "1:349048131216:web:73016006297ccf02aa1215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);