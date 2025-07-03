// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgq4JY0vYx2tlPThDMIepbJ0P4qL-YtD4",
  authDomain: "x-clone-dbd79.firebaseapp.com",
  projectId: "x-clone-dbd79",
  storageBucket: "x-clone-dbd79.firebasestorage.app",
  messagingSenderId: "785707896445",
  appId: "1:785707896445:web:ee0535ab8c9a103d316b14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);