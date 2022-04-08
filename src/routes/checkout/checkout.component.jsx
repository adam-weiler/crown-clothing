import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                
                <div className='header-block'>
                    <span>Description</span>
                </div>
                
                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
            { cartItems.length === 0 ?
                <span>Your cart is currently empty</span>
            : 
                <div>
                    <div>
                        {
                            // <CheckoutItem cartItem={cartItem} />
                            cartItems.map ((cartItem) => 
                                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )}
                    </div>
                Total

                *Please use the following test credit card for payments*

                </div>
            }

            <span className='total'>Total: 0</span>
        </div>
    );
};

export default Checkout;