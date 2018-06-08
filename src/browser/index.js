import React from "react"
import ReactDOM from 'react-dom'
import App from '../common/component/App.js'

import {
   BrowserRouter ,
   HashRouter ,
   Redirect ,
   Route,
   Link
 } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')

)
