import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            { cartItems.length === 0 ?
                <span>Your cart is currently empty</span>
            : 
                <div>



                Product:    Description:
                Quantity:
                Price:
                Remove:
                <br/>


                <div>
                    {
                        // <CheckoutItem cartItem={cartItem} />
                        cartItems.map ((cartItem) => {
                            const {id, name, quantity} = cartItem;
                            return (
                                <div key={id}>
                                    <h2>{name}</h2>
                                    <br/>
                                    <span>{quantity}</span>
                                    <br/>
                                    <span onClick={() => removeItemToCart(cartItem)}>Decrement</span>
                                    <br/>
                                    <span onClick={() => addItemToCart(cartItem)}>Increment</span>
                                </div>
                            )
                    })}
                </div>

                <br/>

                Total

                <br/>

                *Please use the following test credit card for payments*

                No</div>
            }





        </div>
    );
};

export default Checkout;