import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, AllItems, Total } from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);  

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            
            { cartItems.length === 0 ?
                <span>Your cart is currently empty</span>
            : 
                <AllItems>
                        {
                            // <CheckoutItem cartItem={cartItem} />
                            cartItems.map ((cartItem) => 
                                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )}
                *Please use the following test credit card for payments*
                </AllItems>
            }

            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;