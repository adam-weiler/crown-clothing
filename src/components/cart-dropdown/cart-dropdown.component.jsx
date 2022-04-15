import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? ( // If cartItems is more than 0, map all the items.
                        cartItems.map (item => (
                        <CartItem key={item.id} cartItem={item} />
                    )))
                    : ( // Otherwise show the cart is empty.
                        <EmptyMessage>Your cart is empty.</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;

//We want to toggle the showing of this cart
//We want another context, of the items in the cart
//and whether or not it's open.
//Create some way for us to be able to store the state whether the drawer is open or not
//And trigger it onclick.
//To hide show this.