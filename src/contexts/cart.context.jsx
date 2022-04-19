import { createContext, useState, useEffect, useReducer } from 'react';

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

const clearCartItem = (cartItems, cartItemToClear) => {
    // Completely removes that item from the cart.
        return cartItems.filter(cartItem => cartItem.id != cartItemToClear.id); // Runs through the array and removes any where the id is the cartItemToRemove.
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    // updateQuantity: () => {},
    cartTotal: 0,
})

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const cartReducer = (state, action) => {
    console.log('Dispatcher was called')
    console.log(action)
    // The Reducer should not handle any business actions.
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            // console.log(state)
            // console.log(payload)
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer.`)
    }
}

export const CartProvider = ({children}) => {
    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

        const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)

        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount }});
    }



    // const isCartOpenReducer = (openShutCart) => {
    //     console.log('hi')
    //     dispatch({ type: 'OPEN_CLOSE_CART', payload: { isCartOpen: openShutCart }});
    // }




    const addItemToCart = (productToAdd) => { // When a user clicks on add item to cart.
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCart = (cartItemToRemove) => { // When a user clicks on remove, we remove 1 quantity of item from cart.
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => { // When a user clicks on X, we remove all quantity of items from cart.
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }



    const setIsCartOpen = (bool) => {
        // console.log('Cart new state: ' + isCartOpen)
        // const openShutCart = !isCartOpen;
        // console.log('Cart new state: ' + openShutCart)
        // isCartOpenReducer(isCartOpen);
        dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
    }


    const value = { 
        isCartOpen, 
        setIsCartOpen,
        addItemToCart, 
        removeItemToCart, 
        clearItemFromCart, 
        cartItems, 
        cartCount ,
        cartTotal
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}