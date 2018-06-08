import {gql} from "apollo-boost"

const addPostMutation = gql`
mutation($title : String!,$body : String! ,$userId : String!){
  addPost(Title:$title,Body :$body,_UserID:$userId)
  {
    _id
    Title
    Body
    _UserID
  }
}

`;
const addUsertMutation = gql`
mutation($title : String!,$body : String! ,$userId : String!){
  addPost(Title:$title,Body :$body,_UserID:$userId)
  {
    _id
    Title
    Body
    _UserID
  }
}

`;
const getPost = gql`
{
  posts {
    _id
    Title
    Body
    _UserID
  }
}
`;
const LoginQuery = gql`
  query loginQuery($email : String!,$password:String!){
    user(email : $email,password :$password){
      email
      name
    }
  }
`;
const getFullPost = gql`
  query postQuery($title : String!){
    post(Title : $title){
      Title
      Body
      Likes
      Comments
    }
  }
`;
export {addPostMutation ,getPost ,addUsertMutation,LoginQuery ,getFullPost};
