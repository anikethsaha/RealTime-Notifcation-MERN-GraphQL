import React from "react"
import { graphql ,compose } from 'react-apollo'
import {connect } from 'react-redux'
import NotificationBell from './NotificationBell.js'
import NotificationBox from './NotificationBox.js'
 class CenterHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      isNotification : false

    };
    this.onNotificationBellClicked = this.onNotificationBellClicked.bind(this);

  }

  componentDidMount(){
    console.log("center header" , this.props);
    this.props.ioSocket.on("NEW_NOTIFICATION", Data => { // // NOTE: Notification logic goes here use switch case of data
      console.log("wooolllaaaa " , Data);
      this.NotificationData = Data;

      this.setState({
        isNotification : true
      })
    })
  }
  onNotificationBellClicked(){
    this.setState({
      noOfNotification : 0,
      isNotification : false
    });
    $('.notification-box').toggleClass('open');
    $('.tria').toggleClass('open');
  }
  render(){
    return (
      <div className="container header-div">
        <div className="side-menu-icon">
          <span onClick={(e) => {
            e.preventDefault(e);
            $('.right-Bar').toggleClass('open');
          }}>
            &#8285;
          </span>
        </div>
        <div className="Notification-menu-icon">
          <NotificationBell
            onClickHandler = {this.onNotificationBellClicked}
            isOn={this.state.isNotification}
            data = {this.NotificationData || ""}
          />
        </div>
        <NotificationBox />

      </div>
    )
  }
}
  const mapStateToProps = (state) => {
      return {
        io : state.io
     }
   }

  const mapDepatchToProps = (dispatch) => {
    return {

    }
  }

export default connect(
    mapStateToProps,
    mapDepatchToProps
  )(CenterHeader);
