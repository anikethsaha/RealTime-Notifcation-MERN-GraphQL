import React from "react"
export default class RightSlidePanel extends React.Component{
  render(){
    return (
      <section className="right-Bar">
          <div className="container">
              <div className="Registration-Div">
                    <div className="right-panel-close-icon">
                      <span onClick={(e) =>{
                        e.preventDefault();
                        $('.right-Bar').removeClass('open');
                      }}>&#10006;</span>
                    </div>
                    <p>Register Here For getting the <i>Dummy</i> API_KEY</p>
                    <form >
                      <input type="text" name="name" placeholder="Write Name" />
                      <input type="text" name="email" placeholder="Write Email"/>
                      <input type="number" name="phone_no" placeholder="Write Phone Number"/>
                      <input type="number" name="account_no" placeholder="Your Account Number"/>
                      <input type="number" name="identification_no" placeholder="Identification Number"/>
                      <input type="password" name="password" placeholder="Write Password"/>
                      <button type="submit" name="button">Register</button>
                    </form>
              </div>
          </div>
      </section>
    )
  }
}
