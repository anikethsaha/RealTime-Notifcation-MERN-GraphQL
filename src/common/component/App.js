import React from "react"
import SideBar from './SideBar.js'
import RightSideBar from './rightSideBar.js'
import Center from './center.js'
export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div >
        <div className="row">
          <SideBar />
          <Center />
          <RightSideBar />
        </div>
      </div>
    )
  }
}
