import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext);
    const { currentUser } = useContext(UserContext); // Leveraging user we are getting from useContext.
    // console.log(currentUser);

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

            </div>
          </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;