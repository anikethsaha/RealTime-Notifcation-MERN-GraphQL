import React from "react"
export default class NotificationBox extends React.Component{
  render(){
    return (
      <div >
        <span className="tria"></span>
        <div  className="notification-box">
            <div className="notification-box-header row">

              <div className="ten columns">
                <p>All Notification</p>
              </div>
              <div className="two columns">
                <span>&#10006;</span>
              </div>
            </div>

            <div className="notification-box-body">
              <div className="notification-content">
                  <h1>First Notification</h1>
              </div>
              <div className="notification-content">
                  <h1>Second Notification</h1>
              </div>
            </div>
        </div>
      </div>

    )
  }
}
