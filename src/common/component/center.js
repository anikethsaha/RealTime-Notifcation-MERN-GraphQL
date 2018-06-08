import React from "react"
import CenterHeader from './center-header.js';
import PreLoadDiv from './preload-content'
import DocsContent from './docsContent'
import PostContent from './postContent.js'
import RightSide from './rightSide.js'
import {Provider} from 'react-redux'
export default class Center extends React.Component{
  constructor(props){
  super(props);
  this.state ={ loading : false};
  this.store = this.props.store;
  }

  render(){

    return (
      <Provider store = {this.store}>
        <div className="center-bar nine columns ">
          <div className="row">
              <CenterHeader />
              <PostContent />
              <RightSide />
          </div>
        </div>
      </Provider>
    )

    }
}
