// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { 
    // auth,
    signInWithGooglePopup, 
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    // useEffect(async () => { // We want to run this code once, the first time this components loads.
    //     const response = await getRedirectResult(auth);
    //     console.log(response);

    //     if (response) { // The page initially loads with this null. But if it is not null, generate a new userDocRef.
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }

    // }, [])

    const logGoogleUser = async () => {
        // const response = await signInWithGooglePopup();
        const {user} = await signInWithGooglePopup(); // This is response.user
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    );
};

export default SignIn;