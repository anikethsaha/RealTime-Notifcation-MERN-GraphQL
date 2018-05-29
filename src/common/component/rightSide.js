import React from "react"
import { graphql ,compose  } from 'react-apollo'
import { addPostMutation , getPost }  from '../GraphQLQueries/Queries.js'
class RightSide extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      title : "",
      body : "",
      userId : ""
    }
    this.SendPostDateToGraph = this.SendPostDateToGraph.bind(this);
  }
  componentDidMount(){
    // this.props.addPostMutation({
    //   variables: {
    //       title : "hello World",
    //       body : "hello body",
    //       userId : "7346387sjdfb"
    //      }
    // })
    // this.setState();
  }
  SendPostDateToGraph(e){
    e.preventDefault();
    console.log(this.state);
    this.props.addPostMutation({
      variables : {
        title : this.state.title,
         body : this.state.body,
         userId : "7346387sjdfb"
      },
      refetchQueries: [{ query: getPost }]
    })

  }
  render(){
      return (
        <div className="four columns">
          <div className="post-form">
            <h3>Write Post</h3>
            <form onSubmit={this.SendPostDateToGraph}>
                <div className="post-title">
                    <label for="">Title</label>
                    <textarea name="name" onChange={(e) =>{
                      e.preventDefault();
                      console.log(e);
                      this.setState({
                        title : e.target.value
                      })
                    }} rows="8" cols="80"></textarea>
                </div>
                <div className="post-body">
                    <label for="">Body</label>
                    <textarea name="name" rows="8" cols="80"  onChange={(e) =>{
                      e.preventDefault();
                      console.log(e);
                      this.setState({
                        body : e.target.value
                      })
                    }}></textarea>
                </div>
                <div className="post-menu-icon">
                  <button onClick={this.SendPostDateToGraph}>Write Post</button>
                </div>
            </form>
          </div>
        </div>
      )
  }
}
export default compose(
  graphql(addPostMutation ,{name : "addPostMutation"}),
  graphql(getPost ,{name : "getPost"})
)(RightSide);
