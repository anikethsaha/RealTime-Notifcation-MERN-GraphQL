import React from "react"
import SideBar from './SideBar.js'
import RightSlidePanel from './rightSlidePanel.js'
import Center from './center.js'
import store from '../../browser/redux/store.js'
import App from './App.js'
import RegistrationForm from './RegistrationForm.js'
import PreLoadDiv from './preload-content'
import routes from '../router.config.js'
import {
   BrowserRouter ,
   HashRouter ,
   Redirect ,
   Switch,
   Route,
   Link
 } from 'react-router-dom'
export default class Layout extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div>
        <div>
          <h1>hwllo</h1>
        </div>
        <Switch>
          {routes.map((route,i) => <Route key={i} {...route} />)}
        </Switch>
    </div>
    )
  }
}
