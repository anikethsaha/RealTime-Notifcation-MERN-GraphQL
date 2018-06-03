import { createStore ,combineReducers  } from 'redux';
import { reducer as formReducer } from 'redux-form'
import myReducer from './reducer.js';

const rootReducer = combineReducers({
  myReducer,
  form :formReducer
})
const store = createStore(rootReducer);

store.subscribe(()=>{
  // console.log("State Changed " , store.getState());
})

export default store;
