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
            <img src={imageUrl} alt={`${name}`} /> <br/>
            <div className='item-details'> <br/>
                <span className='name'>{name} <br/></span>
                <span className='price'><button onClick={removeProductToCart}>Remove to cart</button> {quantity} <button onClick={addProductToCart}>Add to cart</button> <br/></span>
                <span>{quantity * price} <br/></span>
                REMOVE
                <br/><br/><br/>
            </div>
        </div>
    )
}

export default CheckoutItem;