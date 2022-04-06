import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext);
    const { currentUser } = useContext(UserContext); // Leveraging user we are getting from useContext.
    // console.log(currentUser);

    
    const { isCartOpen } = useContext(CartContext);



    // const signOutHandler = async () => {
    //   await signOutUser(); // Tells us whatever signOutUser returns.
    //   setCurrentUser(null);
    // }

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                
                { // If there is a currentUser, render the sign-out link.
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                  ) : (// If there is no currentUser, render the sign-in link.
                    <Link className='nav-link' to='/auth'>
                      SIGN IN
                    </Link>
                  )
                }
              <CartIcon />
            </div>

                {isCartOpen && <CartDropdown /> // Checks isCartOpen and renders the CartDropdown component. Both isCartOpen and the component must evaluate to a truthy value. Components are always truthy. Then it will return the last value (which is the component).
                }
          </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;