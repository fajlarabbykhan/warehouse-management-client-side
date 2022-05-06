// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXiM2UtUd5EWAjE8fgRsSEoLEt6zuvTfA",
    authDomain: "electronic-ecfcf.firebaseapp.com",
    projectId: "electronic-ecfcf",
    storageBucket: "electronic-ecfcf.appspot.com",
    messagingSenderId: "443527125641",
    appId: "1:443527125641:web:d4f2ced09983366ce7c458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth