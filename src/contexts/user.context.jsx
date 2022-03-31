// import { getByDisplayValue } from '@testing-library/react';
import { createContext, useState } from 'react';

// The actual value you want to access.
export const UserContext = createContext({  // Default values.
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => { // Any children of UserProvider can access this state.
    const [currentUser, setCurrentUser] = useState(null);
    const value= { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

//<UserProvider>
//  <App/>  //<App/> is the children in this case.
//</UserProvider>