import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { userCredential } from "../localStorage/LocalStorage";

const firebaseConfig = {
    apiKey: "AIzaSyD8ZZb5TXEo6Qscj4ki8E5MKgS9MOXZSuo",
    authDomain: "shindiri-test.firebaseapp.com",
    projectId: "shindiri-test",
    storageBucket: "shindiri-test.appspot.com",
    messagingSenderId: "52617965392",
    appId: "1:52617965392:web:fc3ff399c4d2e6db6e4655",
    measurementId: "G-CBB903KCR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export default app;

export async function tryLoginAsync() : Promise<boolean> {
    console.log("tryLoginAsync")
    let success = true
    await signInWithEmailAndPassword(auth, userCredential.email, userCredential.password).catch((error) => {
        console.log(error.code, error.message)
        success = false
    })
    return success
}