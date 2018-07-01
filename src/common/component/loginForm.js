import React from 'react';
import {connect} from 'react-redux'
import { graphql ,compose} from 'react-apollo';
import { Field, reduxForm } from 'redux-form'
import { LoginQuery ,getPost }  from '../GraphQLQueries/Queries.js'
import { JWTEncryptToken } from '../Encryption'
const renderField = ({ input, label, type, meta: { touched, error } }) => {

  return (
    <div>

        <label>{label}</label>
        <input {...input}  placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
  )
}
class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);


  }

   submit(values){
    console.log("form submitted" , this.props.LoginQuery);
     this.props.LoginQuery.refetch({
          email :values.email,
          password : values.password
    }).then(async (res) => {
      const jwttoken = await JWTEncryptToken({
        _id : res.data.loginUser._id,
        email : res.data.loginUser.email
      })
      localStorage.setItem('token',jwttoken);
      var storeResponse =  this.props.updateLoggedInUse(res.data.loginUser);
      console.log("store Response" , storeResponse);
      $('.Form-Div form').hide();
      this.setState();
    });
    //
  }
  render(){
    return (
      <div className="Form-Div">
        <p>Login Here</p>
       <form onSubmit={this.props.handleSubmit(this.submit)}>
             <Field name="email" label="Email Address" component={renderField} type="text" placeholder="Email" />
             <Field name="password" label="Password" component={renderField} type="password"   placeholder="Password" />
           <button type="submit" >
             Submit
           </button>
       </form>
   </div>
 )
  }

}



LoginForm =  reduxForm({
  form: 'Login' // a unique identifier for this form
})(LoginForm);



const mapStateToProps = state => {
  return {
      loggedInUser : state.loggedInUser

    }

}
const mapDepatchToProps = dispatch =>{
  return {
      updateLoggedInUse : user =>  dispatch({type :"LOGGED_USER_UPDATE",loggedInUser : user})
  }
}


LoginForm =  graphql(LoginQuery , {
  name : "LoginQuery",
  options : (values) =>({
      variables :{
      email : values.email,
      password : values.password
    }
}
)
})(LoginForm)



export default connect(
  mapStateToProps,
  mapDepatchToProps
)(LoginForm)
