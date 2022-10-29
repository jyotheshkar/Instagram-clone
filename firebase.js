// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7gbJ0GmBn1PDRMnqC3-8ilFrl2OfnSck",
  authDomain: "instagram-clone-35c0b.firebaseapp.com",
  projectId: "instagram-clone-35c0b",
  storageBucket: "instagram-clone-35c0b.appspot.com",
  messagingSenderId: "94109237463",
  appId: "1:94109237463:web:38a6e0bcdbbf7dd1d6b092"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore();
const storage = getStorage();

export { app , db , storage };

