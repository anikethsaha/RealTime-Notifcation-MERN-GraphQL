import {
    gql
} from "apollo-boost"

const addPostMutation = gql `
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
const registerUser = gql `
mutation(
    $email                 : String!,
    $password              : String!,
    $name                  : String!,
    $identification_number : Int!,
    $phone_no              : Int!,
    $account_Number        : Int!
){
 registerUser(
    email                 : $email,
    password              : $password,
    name                  : $name,
    identification_number : $identification_number,
    phone_no              : $phone_no,
    account_Number        : $account_Number 
){      
        email
        name
        JWTtoken
  }
}

`;
const getPost = gql `
{
  posts {
    _id
    Title
    Body
    _UserID
  }
}
`;
const LoginQuery = gql `
  query loginQuery($email : String!,$password:String!){
    user(email : $email,password :$password){
        email
        name
        JWTtoken     
    }
  }
`;
const getFullPost = gql `
  query postQuery($title : String!){
    post(Title : $title){
      Title
      Body
      Comments
    }
  }
`;
export {
    addPostMutation,
    getPost,
    registerUser,
    LoginQuery,
    getFullPost
};
