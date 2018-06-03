import React from 'react';
import {connect} from 'react-redux'
class RegistrationForm extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="Form-Div">
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
    )

  }
}
const mapStateToProps = state => {
  return {
      loggedInUser : state.loggedInUser,
      isReduxWorking :state.isReduxWorking
    }

}
const mapDepatchToProps = dispatch =>{
  return {
    changeIsReduxWorking : answerTrueOrNot =>{
            dispatch({
              type : "CHANGE_REDUX_WORKING_STATUS",
              data : answerTrueOrNot
            });
    }
  }
}
export default connect(
  mapStateToProps,
  mapDepatchToProps
)(RegistrationForm);
