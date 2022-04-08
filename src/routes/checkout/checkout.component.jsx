import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

 
 
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
                {cartItems.map (item => (
                    <CheckoutItem cartItem={item} />
                ))}
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