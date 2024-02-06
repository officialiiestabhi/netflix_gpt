// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC75pVrRoN5LNvwHCV-zNT_0AaQmF6b0yg",
  authDomain: "netflix-gpt-29b26.firebaseapp.com",
  projectId: "netflix-gpt-29b26",
  storageBucket: "netflix-gpt-29b26.appspot.com",
  messagingSenderId: "677946871683",
  appId: "1:677946871683:web:e00a1e37137e35b33630b6",
  measurementId: "G-XQVVFDLRGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();