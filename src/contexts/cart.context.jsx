import { createContext, useState } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Storing data somewhere
// Storage using React Context (instead of call for data)
// Just like user-context
// Set up the storage first
// before the seperate call for the data

// Similar set up of context with Product or Products
// Using useState
// Setting default shop data.