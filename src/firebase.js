import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAocAhOCisIPGtmUoXpcr5KXR8wZPYKYUw",
    authDomain: "vchat-173cd.firebaseapp.com",
    databaseURL: "https://vchat-173cd-default-rtdb.firebaseio.com",
    projectId: "vchat-173cd",
    storageBucket: "vchat-173cd.appspot.com",
    messagingSenderId: "26568419267",
    appId: "1:26568419267:web:844184186bd0a0eba2ff76",
    measurementId: "G-CDM9RSTEXG"
})

export const auth = app.auth()
export default app
