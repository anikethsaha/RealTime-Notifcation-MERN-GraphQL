import React from "react"
export default class CenterHeader extends React.Component{
  constructor(){
    super();

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
          <span>
            &#128276;
          </span>
        </div>
      
      </div>
    )
  }



}
