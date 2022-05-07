// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpJDxfXMrLOvUSL78zbBPuJL8FygvI2dg",
    authDomain: "eelectronic-3d8f6.firebaseapp.com",
    projectId: "eelectronic-3d8f6",
    storageBucket: "eelectronic-3d8f6.appspot.com",
    messagingSenderId: "346263002484",
    appId: "1:346263002484:web:1a35696146b2ecb3e32021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth