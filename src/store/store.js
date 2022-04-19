// Redux:
// This is where our state lives.
// Where we receive actions.
// And dispatch to the Reducers to update the state.

import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // Lets us see the action, and what the state in turn looks after the action. 

import { rootReducer } from './root-reducer';

// Root Reducer

const middleWares = [logger] // Whenever you dispatch an action, it hits the middleware first.

const composedEnhancers = compose(applyMiddleware(...middleWares)); // Passes in all our middlewares as subsequent arguments.

export const store = createStore(rootReducer, undefined, composedEnhancers); // rootReducer, any default states (optional), and our composedEnhancers (which is the middleware).





// Generate our store object.

