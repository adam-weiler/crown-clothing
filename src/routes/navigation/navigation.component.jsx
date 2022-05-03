import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Lets us interact with a component from the Redux store.

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

const Navigation = () => {
    // const { currentUser } = useContext(UserContext); // Leveraging user we are getting from useContext.
    // console.log(currentUser);


    // const currentUser = useSelector((state) => state.user.currentUser); // The currentUser object inside of the Redux store. Whenever the state object changes, the selector rerurns, currentUser updates, and the component rerenders.
    
    const currentUser = useSelector(selectCurrentUser);  // The currentUser object inside of the Redux store. Whenever the state object changes, the selector rerurns, currentUser updates, and the component rerenders.

    const { isCartOpen } = useContext(CartContext);



    // const signOutHandler = async () => {
    //   await signOutUser(); // Tells us whatever signOutUser returns.
    //   setCurrentUser(null);
    // }

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                
                { // If there is a currentUser, render the sign-out link.
                  currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                  ) : (// If there is no currentUser, render the sign-in link.
                    <NavLink to='/auth'>
                      SIGN IN
                    </NavLink>
                  )
                }
              <CartIcon />
            </NavLinks>

                {isCartOpen && <CartDropdown /> // Checks isCartOpen and renders the CartDropdown component. Both isCartOpen and the component must evaluate to a truthy value. Components are always truthy. Then it will return the last value (which is the component).
                }
          </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;