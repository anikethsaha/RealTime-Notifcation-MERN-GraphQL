import React from "react"
export default class SideBar extends React.Component{
  render(){
    return (
      <div className="sideBar three columns">
          <div className="container">

            <div className="side-bar-header">
                <h2>Payment-Gateway</h2>
            </div>
            <div>
                <h1>Stack Used</h1>
            </div>
            <div>
                <h5>NodeJS <br/> ReactJS <br/> ExpressJS <br/> Mongodb <br/> GraphQl <br/> Apollo</h5>
            </div>
            <div>
                <p>
                  Using fragments
                  <br/>
                  Learn how to use fragments to share fields across queries
                </p>
            </div>
          </div>
      </div>
    )
  }
}
