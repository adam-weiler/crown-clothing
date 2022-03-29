// Import the functions you need from the SDKs you need.
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
// getAuth - We need to create an Auth instance.
// signInWithRedirect - We can sign in using a redirect.
// signInWithPopup - Or we can sign in using a popup.
// GoogleAuthProvider - 

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';
// gireFirestore - We need to instantiate our Firestore instance.
// doc - We can retrieve documents inside of our Firestore database.
// getDoc - Getting the documents' data.
// setDoc - Setting the documents' data.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB30JodHdxXtVxQ1YnSn35i03rTMzhmHc",
    authDomain: "crwn-clothing-db-e11e7.firebaseapp.com",
    projectId: "crwn-clothing-db-e11e7",
    storageBucket: "crwn-clothing-db-e11e7.appspot.com",
    messagingSenderId: "698672079224",
    appId: "1:698672079224:web:cebf38b1aba1d9cd93688d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // GoogleAuthProvider is a class from Firebase authentication, connected to Google auth. Sometimes we want to generate multiple providers if different providers do different things. ie: Different buttons could do different things.

provider.setCustomParameters({
    prompt: "select_account" // Every time somebody interacts with our provider, we want to force them to select an account.
});

export const auth = getAuth(); // There's only 1 authentication. It should be the same one for every application.
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); // Instantiate our Firestore.

export const createUserDocumentFromAuth = async (userAuth) => { // Receives userAuth object and then stores it in Firestore.
    const userDocRef = doc(db, 'users', userAuth.uid); // Pass in our Firestore database instance, our Users collection, and a unique identifier returned in the object from the popup request.

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists()); // This reference in Firebase doesn't exist yet.

    //We need to check if User Data exists.

    //If data doesn't exist, we want to create or set the document with userSnapshot pointer.

    //If it exists, we want to return back userDocRef

    if(!userSnapshot.exists()) { // If user doesn't exist yet, we want to create it with the pointer inside of userSnapshot.
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt,
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    } else {
        return userDocRef;
    }
}