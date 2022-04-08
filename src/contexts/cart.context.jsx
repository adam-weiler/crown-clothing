import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    // Find if cartItems contains the productToAdd already.
    const existingCartItem = cartItems.find((cartItem) => 
        cartItem.id === productToAdd.id // Runs through the entire cartItems array and check each cartItem.id is the same as productToAdd.id.
    );

    // If found, increment the quantity.
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} // Runs through the entire cartItems array and check each cartItem.id is the same as productToAdd.id. Then it returns original cartItem and increases the quantity by 1.
            : cartItem // Otherwise just return the cartItem.
        )
    }

    // Then return the new array with modified cartItems or the new cart item.
    // [{...productsToAdd, quantity: 1}]
    return [...cartItems, { ...productToAdd, quantity: 1}]
}



const removeCartItem = (cartItems, cartItemToRemove) => {
    // Find if cartItems contains the cartItemToRemove already.
    const existingCartItem = cartItems.find((cartItem) => 
        cartItem.id === cartItemToRemove.id // Runs through the entire cartItems array and check each cartItem.id is the same as cartItemToRemove.id.
    );

    // Check if quantity is equal to 1, it removes that item from the cart.
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id); // Runs through the array and removes any where the id is the cartItemToRemove.
    }


    // Return back cartItems with matching id and new reduced quantity.
    
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
        ? 
        
        {...cartItem, quantity: cartItem.quantity - 1 // Runs through the entire cartItems array and check each cartItem.id is the same as productToRemove.id. Then it returns original cartItem and decreases the quantity by 1.
        }
            : cartItem // Otherwise just return the cartItem.
        )
}


const deleteCartItem = (cartItems, cartItemToRemove) => {
    // Find if cartItems contains the cartItemToRemove already.
    const existingCartItem = cartItems.find((cartItem) => 
        cartItem.id === cartItemToRemove.id // Runs through the entire cartItems array and check each cartItem.id is the same as cartItemToRemove.id.
    );

    // Check if quantity is greater than 0, it removes that item from the cart.
    if(existingCartItem.quantity > 0) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id); // Runs through the array and removes any where the id is the cartItemToRemove.
    }


    // Return back cartItems with matching id and new reduced quantity.
    
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
        ? 
        
        {...cartItem, quantity: cartItem.quantity - 1 // Runs through the entire cartItems array and check each cartItem.id is the same as productToRemove.id. Then it returns original cartItem and decreases the quantity by 1.
        }
            : cartItem // Otherwise just return the cartItem.
        )
}



    export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    // updateQuantity: () => {},
})











/*
Product 
{
    id,
    name,
    price,
    imageUrl
}

Cart Item ; very similar 
{
    id,
    name,
    price,
    imageUrl,
    quantity
}
*/

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false); // By default the cart dropdown is hidden.
    const [cartItems, setCartItems] = useState([]); // By default, our cart is empty.
    const [cartCount, setCartCount] = useState(0);

    useEffect (() => { // Recalculate the cartCount everytime the cartItems changes.
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems]); // Runs every time the cartItems changes.


    const addItemToCart = (productToAdd) => { // When a user clicks on add item to cart.
        
        // setQuantity(addQuantity(quantity))



        setCartItems(addCartItem(cartItems, productToAdd));
    }



    const removeItemToCart = (cartItemToRemove) => { // When a user clicks on remove item from cart.
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }


    const deleteItemToCart = (cartItemToRemove) => { // When a user clicks on remove item from cart.
        setCartItems(deleteCartItem(cartItems, cartItemToRemove));
    }


    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemToCart, 
        deleteItemToCart, 
        cartItems, 
        cartCount 
    };

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