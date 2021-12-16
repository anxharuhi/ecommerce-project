// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA87FAjwyJu3cnhUb2xiYGHPWfPsK1iLak",
  authDomain: "db-ecommerce-project.firebaseapp.com",
  projectId: "db-ecommerce-project",
  storageBucket: "db-ecommerce-project.appspot.com",
  messagingSenderId: "697621209112",
  appId: "1:697621209112:web:a7697e02a8a8fc3dfca36d",
  measurementId: "G-71EQR6GT28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseFirestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => signInWithPopup(firebaseAuth, provider);
export const signOutWithGoogle = () => signOut(firebaseAuth);

export default app;