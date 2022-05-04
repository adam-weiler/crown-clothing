// Redux:
// This is where our state lives.
// Where we receive actions.
// And dispatch to the Reducers to update the state.

import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'; // Lets us see the action, and what the state in turn looks after the action. 

import { rootReducer } from './root-reducer';

// Root Reducer



// const curryFunc = (a) => (b, c) => { // A currying function.
//     a + b - c
// }

// const with3 = curryFunc(3);
// const with10 = curryFunc(10);
// with10(9, 2); // Is equal to 10 + 9 - 2
// with3(2,4); //Is is equal to 3 + 2, - 4.


// Instead of using redux-logger middleware, we're making our own.
const loggerMiddleware = (store) => (next) => (action) => { // This is a currying function.
    if (!action.type) { // There are times from other middleware we receive actions with no type. In this case, we just want to just pass it on.
        return next(action);
    }

    //If there is an action type we want to log it.
    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);

    console.log('next state: ', store.getState())

} 


// const middleWares = [logger] // Whenever you dispatch an action, it hits the middleware first.

const middleWares = [loggerMiddleware] // Whenever you dispatch an action, it hits the middleware first.

const composedEnhancers = compose(applyMiddleware(...middleWares)); // Passes in all our middlewares as subsequent arguments.

export const store = createStore(rootReducer, undefined, composedEnhancers); // rootReducer, any default states (optional), and our composedEnhancers (which is the middleware).





// Generate our store object.

