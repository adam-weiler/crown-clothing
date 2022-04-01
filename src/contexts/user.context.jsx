// import { getByDisplayValue } from '@testing-library/react';
import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

// The actual value you want to access.
export const UserContext = createContext({  // Default values.
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => { // Any children of UserProvider can access this state.
    const [currentUser, setCurrentUser] = useState(null);
    const value= { currentUser, setCurrentUser };

    useEffect(() => { // It checks the authentication state automatically when this function mounts.
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user); // User signing in with Google or with a new account.
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

//<UserProvider>
//  <App/>  //<App/> is the children in this case.
//</UserProvider>