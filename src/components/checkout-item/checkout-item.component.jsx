import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart } = useContext(CartContext);
    const { removeItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(cartItem);
    const removeProductToCart = () => removeItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            
            
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            REMOVE
            <div className='remove-button'>&#10005;</div>
            
        </div>
    )
}

export default CheckoutItem;