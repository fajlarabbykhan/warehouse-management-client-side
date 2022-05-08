// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUPWFG9ErK20ueQ0C0Pb720r-QBb-RoAE",
    authDomain: "electronic-a910e.firebaseapp.com",
    projectId: "electronic-a910e",
    storageBucket: "electronic-a910e.appspot.com",
    messagingSenderId: "925019054153",
    appId: "1:925019054153:web:60b8eb5324289b4219df98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth