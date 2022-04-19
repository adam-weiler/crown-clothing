// import { getByDisplayValue } from '@testing-library/react';
import { createContext, useState, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

// The actual value you want to access.
export const UserContext = createContext({  // Default values.
    currentUser: null,
    setCurrentUser: () => null,
});





export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    // console.log('Dispatched was called')
    // console.log(action)
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, // The previous values on the state object.
                currentUser: payload // And overwrite with the new value.
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer.`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}



export const UserProvider = ({ children }) => { // Any children of UserProvider can access this state.
    // const [currentUser, setCurrentUser] = useState(null);

    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;
    // console.log(currentUser)


    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

    const value= { currentUser, setCurrentUser };

    useEffect(() => { // It checks the authentication state automatically when this function mounts.
        const unsubscribe = onAuthStateChangedListener((user) => {
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

/*
Reducers: Functions that return back an object.
const userReducer = () => {
    return {
        currentUser: null, or object from Firebase.
    }
}

const userReducer = (state, action) => {
    return {
        currentUser: null, or object from Firebase.
    }
}

*/