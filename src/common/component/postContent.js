import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import PreLoadDiv from './preload-content'
import DocsContent from './docsContent'
import {getPost}  from '../GraphQLQueries/Queries.js'
import {
   BrowserRouter ,
   HashRouter ,
   Redirect ,
   Route,
   Link
 } from 'react-router-dom'
 class PostContent extends React.Component{
   constructor(){
     super();
     this.displayPost = this.displayPost.bind(this);

   }
   componentDidMount(){
     console.log("post", this.props.data);
   }
  displayPost(){

    var data = this.props.data;
    console.log("data",data);
    if(data.loading){
        return ( <div><PreLoadDiv /></div> );
    } else {
      console.log("data2" ,data);
        return data.posts.map((post,i) => {
            return(
                <DocsContent
                  key={i}
                  i={i}
                  h1={post.Title}
                  p={post.Body}
                  a="/test"
                />
            );
        })
    }
}
  render(){
    return (

      <div className="seven columns">
        {this.displayPost()}
      </div>
    )
  }
}
export default graphql(getPost)(PostContent);
