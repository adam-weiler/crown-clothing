// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { 
    // auth,
    signInWithGooglePopup, 
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
    // useEffect(async () => { // We want to run this code once, the first time this components loads.
    //     const response = await getRedirectResult(auth);
    //     console.log(response);

    //     if (response) { // The page initially loads with this null. But if it is not null, generate a new userDocRef.
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }

    // }, [])


    return (
        <div>
            <SignInForm />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    );
};

export default Authentication;