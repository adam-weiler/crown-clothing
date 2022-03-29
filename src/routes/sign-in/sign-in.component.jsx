import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const signIn = () => {
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
        </div>
    );
};

export default signIn;