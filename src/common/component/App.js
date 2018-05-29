import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo'
import SideBar from './SideBar.js'
import RightSlidePanel from './rightSlidePanel.js'
import Center from './center.js'

// Apollo ApolloClient
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphqlinterface'
})
export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ApolloProvider client = {client} >
        <div >
          <div className="row">
            <SideBar />
            <Center />
            <RightSlidePanel />
          </div>
        </div>
      </ApolloProvider>
    )
  }
}
