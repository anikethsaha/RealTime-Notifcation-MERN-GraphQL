import React from "react"
import fetch from 'isomorphic-fetch'

export default class DocsContent extends React.Component{
  constructor(){
    super();
  }
  render(){

    return (
      <div className="content-wrapper">
                <div key={this.props.i} className="post-content-div">
                  <div className="">
                      <div className = " content-title">
                          <h1>{this.props.h1}</h1>
                      </div>
                      <div className = " content-body">
                          <p>{this.props.p}</p>
                      </div>
                      <span>{this.props.span}</span>
                      <br/>
                      <a >{this.props.a}</a>
                  </div>
                </div>


      </div>
    )
  }
}
