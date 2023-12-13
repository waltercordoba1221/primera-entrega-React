// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrGexwWgzFtNj_Pw_rQ87qLrLzZ6hNBRM",
  authDomain: "walter-cordoba-57b82.firebaseapp.com",
  projectId: "walter-cordoba-57b82",
  storageBucket: "walter-cordoba-57b82.appspot.com",
  messagingSenderId: "346673838948",
  appId: "1:346673838948:web:371d03272528077d961871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)