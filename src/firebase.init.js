import { getAuth } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8C8NnrFY3ZA4hNKmSpVvxF4dyYLkQ4oE",
    authDomain: "eelectronic-9f6e5.firebaseapp.com",
    projectId: "eelectronic-9f6e5",
    storageBucket: "eelectronic-9f6e5.appspot.com",
    messagingSenderId: "215149169663",
    appId: "1:215149169663:web:cca3e0ba7b5cdd34e135ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth