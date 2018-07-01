import React from 'react'
import { graphql ,compose } from 'react-apollo'
import {connect } from 'react-redux'
import  { getFullPost , createLike}  from '../GraphQLQueries/Queries.js'
import PreLoadDiv from './preload-content'
import { JWTDecryption } from '../Encryption'

class DetailPost extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Title : '',
      Body : '',
      likes : 0,
      isLoading : true,
      _authorID : ''
    }
    this.getPostData = this.getPostData.bind(this);
    this.postLoaded = this.postLoaded.bind(this);
    this.postNotLoad = this.postNotLoad.bind(this);
    this.likeHandler = this.likeHandler.bind(this);
  }
  getPostData(){
    this.props.getFullPost.refetch({
        title : this.props.match.params.title
      }).then(response => {
        this.setState({
          _id : response.data.post._id,
          Title : response.data.post.Title,
          Body : response.data.post.Body,
          isLoading : false,
          likes : response.data.post.Likes,
          _authorID : response.data.post._UserID
        })
      })
  }
  async likeHandler(e){
    console.log(e);
    if(localStorage.getItem('token') &&
      typeof localStorage.getItem('token') !== "undefined"){
        console.log('can like this post', this.state);
          const data = await JWTDecryption(localStorage.getItem('token'));
          console.log('data :', data);
          const payload = {
            postID : this.state._id,
            senderID : data._id,
            recieverID :this.state._authorID
          }
          this.props.createLike({
            variables : {
              postID : payload.postID,
              senderID : payload.senderID,
              recieverID :payload.recieverID
            }
          }).then(res => console.log(res));
      }else{
        console.log('this.state._authorID :', this.state._authorID);
        $('.right-Bar').toggleClass('open');
      }
  }


  async componentWillMount(){
    await this.getPostData();
  }
  postNotLoad(){
   return (
     <div className="seven columns">
       <div className="content-wrapper ">
         <div  className="post-content-div">
           <div className="">
               <div className= " content-title">
                   <h1>{this.props.match.params.title.toUpperCase()}</h1>
               </div>
               <div className="content-body">
                 <PreLoadDiv />
               </div>
           </div>
         </div>
       </div>
    </div>

   )
 }
 postLoaded(){
   return (
     <div className="seven columns">
       <div className="content-wrapper ">
           <div  className="post-content-div">
             <div className="">
                 <div className= " content-title">
                     <h1>{this.props.match.params.title.toUpperCase()}</h1>
                 </div>
                 <div className="content-body">
                   <p>{this.state.Body}</p>
                 </div>
                 <div className="helper-sec row">
                  <a onClick={this.likeHandler} className="meta-likes two columns">
                       <span  className="ti-thumb-up"></span>
                       <span >{this.state.likes}</span>
                   </a>
                   <a className="meta-author two columns">
                      <span className="ti-pencil-alt"></span>
                      <span>Comments</span>
                   </a>
                 </div>
             </div>
           </div>
       </div>
   </div>
   )
 }
  render(){
      if (this.state.isLoading)
        return (
              this.postNotLoad()
        )
        return (
          this.postLoaded()
        )
      }
}
const mapStateToProps = (state) => {
    return {
      currentPost : state.currentPost,
      io : state.io
   }
 }

const mapDepatchToProps = (dispatch) => {
  return {
    updateCurrentPost : (_post) => dispatch({type : "UPDATED_CURRENT_POST",data : _post}),
    getCurrentPost : () => dispatch({type : "GET_CURRENT_POST"}),
    getSocketIo : () => dispatch({type : "GET_SOCKET_IO"})
  }
}


DetailPost = connect(
  mapStateToProps,
  mapDepatchToProps
)(DetailPost);


// export default graphql(getFullPost,{
//   name : "getFullPost",
//   options : (values) => ({
//     variables : {
//       title : values
//     }
//   })
// })(DetailPost);

export default compose(
  graphql(getFullPost,{
    name : "getFullPost",
    options : (values) => ({
      variables : {
        title : values
      }
    })
  }),
  graphql(createLike,{name:"createLike"})
)(DetailPost);