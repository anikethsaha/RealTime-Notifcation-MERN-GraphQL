import React from "react"
import CenterHeader from './center-header.js';
import PreLoadDiv from './preload-content'
import DocsContent from './docsContent'
import PostContent from './postContent.js'
import RightSide from './rightSide.js'
export default class Center extends React.Component{
  constructor(props){
  super(props);
  this.state ={ loading : false};

  }
  componentWillMount(){
    this.setState({  // re-renders the component everytime setState is called
      loading:true
    })

  }
  componentDidMount(){
    this.setState({ // re-renders the component everytime setState is called
      loading:false
    })
  }

  render(){

    return (
      <div className="center-bar nine columns ">
        <div className="row">
            <CenterHeader />
            <PostContent />
            <RightSide />
        </div>
      </div>
    )

    }
}
