import  initialState  from './initialState.js';
import objectAssign from 'object-assign'

const myReducer = (state = initialState(), Action) => {
  switch (Action.type) {
    case "LOGGED_USER_UPDATE":

      return state;
      break;
    case "REGISTER_USER":

      break;
    case "UPDATED_CURRENT_POST":
      return Object.assign(state,{
        currentPost : {
          title : Action.data.Title,
          body : Action.data.Body
        }
      })
      break;
    case "GET_CURRENT_POST":

        return state.currentPost;
      break;
    case "ADD_SOCKET_IO":
      console.log("Inisde of the Add socket reducer"  );
      return Object.assign(state,{
        io : Action.data
      })
      break;
    case "GET_SOCKET_IO":
    console.log("get socekt");
        return state.io;
      break;
    default:
      return state;
      break;
  }
}
export default myReducer;
