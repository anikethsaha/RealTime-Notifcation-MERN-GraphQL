import React from "react"
import RegistrationForm from './RegistrationForm.js'
import LoginForm from './loginForm.js'
import {Provider } from 'react-redux'
export default class RightSlidePanel extends React.Component{
  constructor(props){
    super(props);
    this.store = this.props.store;
  }
  render(){
    return (
      <Provider store = {this.store} >
        <section className="right-Bar">
            <div className="container">
              <RegistrationForm />
              <LoginForm />
            </div>
        </section>
      </Provider>
    )
  }
}
