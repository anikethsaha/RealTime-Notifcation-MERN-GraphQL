import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import PreLoadDiv from './preload-content'
import DocsContent from './docsContent'
import {getPost}  from '../GraphQLQueries/Queries.js'
 class PostContent extends React.Component{
   constructor(){
     super();
     this.displayPost = this.displayPost.bind(this);
   }
  displayPost(){
    var data = this.props.data;
    if(data.loading){
        return ( <div><PreLoadDiv /></div> );
    } else {

        return data.posts.map((post,i) => {
            return(
                <DocsContent
                  key={i}
                  i={i}
                  h1={post.Title}
                  p={post.Body}
                  a={post._id}/>
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
