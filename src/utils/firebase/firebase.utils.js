// Import the functions you need from the SDKs you need.
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
// getAuth - We need to create an Auth instance.
// signInWithRedirect - We can sign in using a redirect.
// signInWithPopup - Or we can sign in using a popup.
// GoogleAuthProvider - 

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