import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDVoSrEJUEl0KKCxgGYwB9K4YtpryMugnU",
    authDomain: "portfolio-6c7b3.firebaseapp.com",
    projectId: "portfolio-6c7b3",
    storageBucket: "portfolio-6c7b3.appspot.com",
    messagingSenderId: "375773825441",
    appId: "1:375773825441:web:e3cd6d8dd2d179b624e3e0"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}