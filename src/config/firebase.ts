// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5JhQEbecSMuFyWTvbrFtIZZbZQFeqQOI",
  authDomain: "animista-clone-ts.firebaseapp.com",
  projectId: "animista-clone-ts",
  storageBucket: "animista-clone-ts.appspot.com",
  messagingSenderId: "999203202190",
  appId: "1:999203202190:web:78fec2b7c02bbb88de15df",
  measurementId: "G-JHTQXV862F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
