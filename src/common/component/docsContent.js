import React from "react"
import fetch from 'isomorphic-fetch'
import {
   BrowserRouter ,
   HashRouter ,
   Redirect ,
   Route,
   Link
 } from 'react-router-dom'
export default class DocsContent extends React.Component{
  constructor(){
    super();
  }
  render(){
    let href = "/#/Dpost/";
    href = href.concat(this.props.h1)
    return (
      <div className="content-wrapper ">
                <div key={this.props.i} className="post-content-div">
                  <div className="">
                      <div className = " content-title">
                          <h1>{this.props.h1.toUpperCase()}</h1>
                      </div>
                      <div className = " content-body">
                          <p>{this.props.p}</p>
                      </div>
                      <br/>
                      <div className="helper-sec">
                        <span className="ti-align-center" > </span>
                        <a  href={href} >Full Post</a>
                      </div>
                  </div>
                </div>


      </div>
    )
  }
}
