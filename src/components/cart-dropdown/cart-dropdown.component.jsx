import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
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