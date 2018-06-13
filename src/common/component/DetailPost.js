import React from 'react'
import { graphql ,compose } from 'react-apollo'
import {connect } from 'react-redux'
import  { getFullPost}  from '../GraphQLQueries/Queries.js'
import PreLoadDiv from './preload-content'
class DetailPost extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Title : '',
      Body : '',
      likes : 0,
      isLoading : true
    }
    this.getPostData = this.getPostData.bind(this);
    this.postLoaded = this.postLoaded.bind(this);
    this.postNotLoad = this.postNotLoad.bind(this);

  }
  getPostData(){
    this.props.getFullPost.refetch({
        title : this.props.match.params.title
      }).then(response => {

        this.setState({
          Title : response.data.post.Title,
          Body : response.data.post.Body,
          isLoading : false,
          likes : response.data.post.Likes
        })
      })
  }

  async componentWillMount(){
    await this.getPostData();
  }
 //   async componentWillMount(){
 //   var response = await this.props.getFullPost.refetch({
 //     title : this.props.match.params.title
 //   });
 //   var currentPostVar = await this.props.updateCurrentPost(response);
 //   this.state = {
 //     Title : currentPostVar.data.data.post.Title,
 //     Body : currentPostVar.data.data.post.Body,
 //     isLoading : false
 //   }
 //
 // }
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
                  <a className="meta-likes two columns">
                       <span className="ti-thumb-up"></span>
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


export default graphql(getFullPost,{
  name : "getFullPost",
  options : (values) => ({
    variables : {
      title : values
    }
  })
})(DetailPost);
