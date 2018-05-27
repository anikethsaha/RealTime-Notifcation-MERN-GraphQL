import React from 'react';
// import { renderToString } from "react-dom/server";
export default class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="user-div four columns">
        <div className="user_container">
          <div className="user_avatar">

          </div>
          <div className="user_details">
                <h2 className="user_name"><strong>Name : </strong></h2>
                <h3><strong>Age : </strong></h3>
                <h3><strong>Gender : </strong></h3>
                <p><strong> Location :</strong></p>
                <p><strong>Jobs :</strong></p>
                <div className="buy-btn-bar">
                    <button className="buy-btn">Buy Now</button>
                </div>
          </div>

        </div>
      </div>
    )
  }
}
// export var Apps = renderToString(<App />);
