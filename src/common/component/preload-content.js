import React from 'react';

export default class PreLoadDiv extends React.Component{
  constructor(){
    super();
    console.log("inside the pre load div" +this.props);
  }
  render(){
    return (
      <div  className="postLoadCard content-div">
          <div className="bodyWrap">
            <div className="loadingAnim"></div>
            <br/>
            <div className="loadingAnim"></div>
            <div className="loadingAnim"></div>
              <br/>
            <div className="loadingAnim"></div>
          </div>
          <div className="footerWrap"></div>
      </div>
    )
  }
}
