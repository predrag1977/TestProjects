import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, deleteUser, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { setToken, setUserCredential, userCredential } from "../localStorage/LocalStorage";

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
    const {email, password} = userCredential()
    let success = true
    await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        console.log(error.code, error.message)
        success = false
    })
    return success
}

export async function logIn(email: string, password: string) : Promise<boolean> {
    console.log("logIn")
    let success = true
    await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const token = await userCredential.user.getIdToken()
        setUserCredential(email, password)
        setToken(token)
    }).catch((error) => {
        console.log(error.code, error.message)
        success = false
    })
    return success
}

export async function logOut() : Promise<boolean> {
    console.log("logOut")
    let success = true
    await signOut(auth).catch((error) => {
        console.log(error.code, error.message)
        success = false
    })
    return success
}

export async function signUp(email: string, password: string) : Promise<boolean> {
    console.log("signUp")
    let success = true
    await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const token = await userCredential.user.getIdToken()
        setUserCredential(email, password)
        setToken(token)
    }).catch((error) => {
        console.log(error.code, error.message)
        success = false
    })
    return success
}
