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
export {addPostMutation ,getPost};
