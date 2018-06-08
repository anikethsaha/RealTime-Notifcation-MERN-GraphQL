import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo'
import SideBar from './SideBar.js'
import RightSlidePanel from './rightSlidePanel.js'
import Center from './center.js'
import store from '../../browser/redux/store.js'
import PostContent from './postContent.js'
import RightSide from './rightSide.js'
import DetailPost from './DetailPost.js'
import CenterHeader from './center-header.js'
import {Provider} from 'react-redux'
import RegistrationForm from './RegistrationForm.js'
import {
   BrowserRouter ,
   HashRouter ,
   Redirect ,
   Switch,
   Route,
   Link
 } from 'react-router-dom'

// Apollo ApolloClient   // NOTE:  _ _use POST : 5000 when using expressJS graphQL server_ _ 
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.testing = this.testing.bind(this);
  }
  testing(){
    return (
      <div className="seven columns">
        <h1>hello world</h1>
      </div>
    )
  }
  render(){
    return (
      <ApolloProvider client = {client} >
        <div >
          <div className="row">
            <SideBar store={store} />
            <Provider store = {store}>
              <div className="center-bar nine columns ">
                <div className="row">
                    <CenterHeader />
                    <Switch>
                      <Route exact path = "/" component = {PostContent} />
                      <Route path="/Dpost/:title" component={DetailPost} />
                    </Switch>
                    <RightSide />
                </div>
              </div>
            </Provider>
            <RightSlidePanel store={store}/>
          </div>
        </div>
      </ApolloProvider>
    )
  }
}
