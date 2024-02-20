import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBSUN36bVF4Fa_k70fR6z6gZZyLAt44Jfg",
    authDomain: "ecommerce-21fc8.firebaseapp.com",
    projectId: "ecommerce-21fc8",
    storageBucket: "ecommerce-21fc8.appspot.com",
    messagingSenderId: "243572064841",
    appId: "1:243572064841:web:fce3aea93276d82e537598",
    measurementId: "G-H41XY7XQCS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592




// Initialize Cloud Firestore and get a reference to the service