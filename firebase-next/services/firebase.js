// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Get DATA from a collection: https://firebase.google.com/docs/firestore/quickstart#web-version-9
import { collection, getDocs, addDoc } from "firebase/firestore";

// Import auth stuff
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth"; // Accesso via Google


// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhamcnZABOUolSE17Nm4xTGCTJkeH6lIU",
  authDomain: "edgemony-cb4.firebaseapp.com",
  projectId: "edgemony-cb4",
  storageBucket: "edgemony-cb4.appspot.com",
  messagingSenderId: "451121542276",
  appId: "1:451121542276:web:76ffb391321e9e3af1bed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database Firestore
const db = getFirestore(app);

// Questa parte scrive i dati nel server
// try {
//   const docRef = await addDoc(collection(db, "prima-raccolta"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// Questa parte prende i dati dal server
// const querySnapshot = await getDocs(collection(db, "prima-raccolta"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });


// Autenticazione con google
const auth = getAuth();

// Creazione Google Provider
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log('======>', user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

const accessWithGoogle = () => signInWithPopup(auth, provider);


export { app, db, auth, accessWithGoogle };