import  initialState  from './initialState.js';
const myReducer = (state = initialState(), Action) => {
  switch (Action.type) {
    case "LOGGED_USER_UPDATE":
      console.log("Inside the login user reducer" , Action);
      return state;
      break;
    case "REGISTER_USER":
      console.log("Inside the Register user reducer");
      break;
    case "CHANGE_REDUX_WORKING_STATUS":
      console.log("CHANGE_REDUX_WORKING_STATUS");
      return state;
      break;
    default:
      return state;
      break;
  }
}
export default myReducer;
