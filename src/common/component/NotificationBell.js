import React from "react"
export default class NotificationBell extends React.Component{
  constructor(props){
    super(props);
    console.log("notification props" , this.props);
    this.notificationPresent = this.notificationPresent.bind(this);
    this.notificationNotPresent = this.notificationNotPresent.bind(this);
  }

  notificationPresent(){

    return (
      <div onClick = {this.props.onClickHandler}>
        <span className="notify-allow">
          NEW
        </span>
        <span>
            &#128276;
        </span>
      </div>
    )
  }
  notificationNotPresent(){

    return (
      <div onClick = {this.props.onClickHandler}>
        <span>
            &#128276;
        </span>
      </div>
    )
  }
  render(){
    if(this.props.isOn){
      return   this.notificationPresent();
    }else {
      return   this.notificationNotPresent();
    }
  }
}
