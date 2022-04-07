import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            {cartItems.map (item => (
                <CartItem cartItem={item} />
            ))}

            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;

//We want to toggle the showing of this cart
//We want another context, of the items in the cart
//and whether or not it's open.
//Create some way for us to be able to store the state whether the drawer is open or not
//And trigger it onclick.
//To hide show this.