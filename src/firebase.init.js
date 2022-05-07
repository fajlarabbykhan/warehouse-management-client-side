// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwPS4mmfxAo0W5_VjRZRkNosSUyaG7JRQ",
    authDomain: "e-electronic.firebaseapp.com",
    projectId: "e-electronic",
    storageBucket: "e-electronic.appspot.com",
    messagingSenderId: "464266127021",
    appId: "1:464266127021:web:992b90b3c29739f5908824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth