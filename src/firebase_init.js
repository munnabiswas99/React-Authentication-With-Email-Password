// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1dlhUm8E8DHnyToD25vyGi34GNivVH6Q",
  authDomain: "explore-email-password-a-1124b.firebaseapp.com",
  projectId: "explore-email-password-a-1124b",
  storageBucket: "explore-email-password-a-1124b.firebasestorage.app",
  messagingSenderId: "742736286911",
  appId: "1:742736286911:web:49ee7ba5d474f75570e20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);