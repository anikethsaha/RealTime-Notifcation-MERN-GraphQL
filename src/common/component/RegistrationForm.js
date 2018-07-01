import React from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { registerUser } from '../GraphQLQueries/Queries.js'
import { graphql ,compose} from 'react-apollo';
const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>

        <label>{label}</label>
        <input {...input}  placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
  )
}

class RegistrationForm extends React.Component{
  constructor(props){
    super(props);
      console.log("register",props);
    this.registerSubmit = this.registerSubmit.bind(this);
  }
   registerSubmit(values){
        const response = this.props.registerUser({
            variables :
            {
               email : values.email,
               name : values.name,
               password : values.password,
               phone_no : values.phone_no,
               identification_number : values.identification_no,
               account_Number : values.account_no
            }
        }).then(async (response) => {
          window.response = response;
          const {JWTtoken} = response.data.registerUser;
          await localStorage.setItem('token',JWTtoken);
          console.log('response :', response);
        })

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
            <p>Register Here </p>
            <form onSubmit={this.props.handleSubmit(this.registerSubmit)}>
              <Field
                name="name"
                label="name"
                component={renderField}
                type="text"
                placeholder=" Name"
              />
              <Field
                name="email"
                label="email"
                component={renderField}
                type="email"
                placeholder=" Write Email"
              />
             <Field
                name="phone_no"
                label="Write Phone Number"
                component={renderField}
                type="number"
                placeholder=" Write Phone Number"
              />
             <Field
                name="account_no"
                label="Your Account Number"
                component={renderField}
                type="number"
                placeholder=" Your Account Number"
              />
              <Field
                name="identification_no"
                label="Identification Number"
                component={renderField}
                type="number"
                placeholder="Identification Number"
              />
              <Field
                name="password"
                label="Write Password"
                component={renderField}
                type="password"
                placeholder="Write Password"
              />
              <button type="submit" name="button">Register</button>
            </form>
      </div>
    )

  }
}
RegistrationForm =  reduxForm({
  form: 'RegistrationForm' // a unique identifier for this form
})(RegistrationForm);
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

RegistrationForm = graphql(registerUser,{
    name : "registerUser"
})(RegistrationForm);

export default connect(
  mapStateToProps,
  mapDepatchToProps
)(RegistrationForm);
