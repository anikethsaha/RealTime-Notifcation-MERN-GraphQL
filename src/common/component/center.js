import React from "react"
import CenterHeader from './center-header.js';
import PreLoadDiv from './preload-content'
import DocsContent from './docsContent'
export default class Center extends React.Component{
  render(){
    return (
      <div className="center-bar nine columns">
            <CenterHeader />
            <PreLoadDiv />
            <DocsContent />
      </div>
    )
  }



}
