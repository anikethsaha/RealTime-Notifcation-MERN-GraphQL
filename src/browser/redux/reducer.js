import  initialState  from './initialState.js';
import objectAssign from 'object-assign'
const myReducer = (state = initialState(), Action) => {
  switch (Action.type) {
    case "LOGGED_USER_UPDATE":
      console.log("Inside the login user reducer" , Action);
      return state;
      break;
    case "REGISTER_USER":
      console.log("Inside the Register user reducer");
      break;
    case "UPDATED_CURRENT_POST":
      return Object.assign({},state,{
        currentPost : {
          title : Action.data.Title,
          body : Action.data.Body
        }
      })
      break;
    case "GET_CURRENT_POST":
        console.log(state.currentPost);
        return state.currentPost;
      break;
    default:
      return state;
      break;
  }
}
export default myReducer;
