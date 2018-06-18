const typeDefs = `
  type post{
    _id : String!,
    Title : String!,
    Body :String!,
    _UserID :String!,
    Comments : String!,
    likesCount : Int!
    Likes : like,
    author : user
  }
  type like{
    _id : String!,
    _PostId : String!,
    _RecieverId :String!,
    _SenderId :String!
  }
  type user{
    _id : String!,
    email : String!,
    name : String!,
    password : String!,
    account_Number : Int!,
    phone_no:Int!,
    identification_number:Int!,
    _Mid :String!,
    JWTtoken : String!,
    postDetails : [post]
  }
  type Query{
    posts : [post],
    localposts : [post],
    post(Title : String!) : post
    localpost(id:Int!) : post,
    users : [user],
    loginUser(email : String! ,password : String!) : user!,
    author : [user],
    postDetails : [post]
  }
  type Mutation{
    addPost(title : String!,body:String!,_UserID : String!) : post,
    registerUser(
      email : String! ,
      password : String!,
      name : String!,
      account_Number : Int!,
      phone_no:Int!,
      identification_number:Int!
    ) : user!,
    createLike(
      _PostId : String!,
      _RecieverId :String!,
      _SenderId :String!
    ) : like!
  }
  type Subscription{
    likeAddedSubscription : like!
  }

`;

module.exports = typeDefs;
