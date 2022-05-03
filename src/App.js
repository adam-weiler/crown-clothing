import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

// import { createAction } from '../utils/reducer/reducer.utils';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils'

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
  console.clear()

  const dispatch = useDispatch();

  useEffect(() => { // It checks the authentication state automatically when this function mounts.
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user); // User signing in with Google or with a new account.
        }
        // setCurrentUser(user); // Creates an action object.
        dispatch(setCurrentUser(user)); // Creates an action object, and dispatchs actions to the root reducer, which passes it to every single reducer function.
    });

    return unsubscribe;
  }, []); // There is a lint error here that can be ignored. We are already using dispatch above, so we don't need to include anything here.


  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path='shop/*' element={<Shop />} />  { /* Match shop/anything. So shop/hats will render the Shop component, which will have it's own routes inside.*/}
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;