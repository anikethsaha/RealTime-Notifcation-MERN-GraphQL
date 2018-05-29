import React from 'react';

export default class PreLoadDiv extends React.Component{
  constructor(){
    super();
    
  }
  render(){
    return (
      <div  className="postLoadCard content-div ">
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
