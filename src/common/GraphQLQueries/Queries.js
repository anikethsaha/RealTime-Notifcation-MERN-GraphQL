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
    loginUser(email : $email,password :$password){
      _id
      email
      name
    }
  }
`;
const createLike = gql `
mutation(
  $postID : String!,
  $senderID : String!,
  $recieverID : String!
){
  createLike(
    _PostId:$postID,
    _SenderId:$senderID,
    _RecieverId :  $recieverID
  ){
    _id
    _PostId
    _SenderId
    _RecieverId
    }
}
`;
const getFullPost = gql `
  query postQuery($title : String!){
    post(Title : $title){
      _id
      Title
      Body
      Comments
      _UserID

    }
  }
`;
const checkNotification = gql`
query notification($userID : String!){
  checkNotification(_userID:$userID){
    _id
    type
    message
    _userID
    metaData
  }
}

`;
export {
    addPostMutation,
    getPost,
    registerUser,
    LoginQuery,
    getFullPost,
    createLike,
    checkNotification
};
