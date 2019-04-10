import { createStore, applyMiddleware  } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   initialState,
// );

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(...middleware)
);

export default store;
