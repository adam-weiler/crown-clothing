// Helper function to create action function that receives type and payload. It returns an object.
// This is a nitpicky optimization to help reduce human error.

// For example, we can replace this:
// dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount }});
// With this:
// dispatch( createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount }));

export const createAction = (type, payload) => ({ type, payload });