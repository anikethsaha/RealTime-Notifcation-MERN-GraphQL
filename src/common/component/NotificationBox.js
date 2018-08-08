import React from "react"
import { allNotification } from '../GraphQLQueries/Queries.js'
import { JWTDecryption } from '../Encryption'
import { graphql ,compose } from 'react-apollo'
class NotificationBox extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notificationData : {}
    }
  }
  async componentDidMount(){

    if(localStorage.getItem('token')){

      const DecodedtokenObject = await JWTDecryption(localStorage.getItem('token'));

      this.props.allNotification.refetch({
        userID :DecodedtokenObject._id
      }).then(res => {
        this.setState({
          notificationData : [...res.data.allNotification]
        })
      })
    }else{
      $('.right-Bar').toggleClass('open');
    }

  }
//   notiNotLoaded(){
//     return (
//         <div >
//           <span className="tria"></span>
//           <div  className="notification-box">
//               <div className="notification-box-header row">

//                 <div className="ten columns">
//                   <p>All Notification</p>
//                 </div>
//                 <div className="two columns">
//                   <span>&#10006;</span>
//                 </div>
//               </div>

//               <div className="notification-box-body">
//                 <div className="notification-content">
//                       <p>loading
//                       </p>
//                 </div>
//                 <div className="notification-content">
//                     <h1></h1>
//                 </div>
//               </div>
//           </div>
//          </div>
// )
//   }
//   notiLoaded(){
//       return for (let i = 0; i < this.state.notificationData.length; i++){
//         console.log('inside for loop :', this.state.notificationData[i]);
//         return this.state.notificationData[i];
//       }
//   }
  render(){
    console.log('this.state.notificationData :', this.state.notificationData);
    var para = [];
    for (let i = 0; i < this.state.notificationData.length; i++){
      console.log('inside for loop :', this.state.notificationData[i]);
      para.push(<div>
        <p>{this.state.notificationData[i].message}</p>
        </div>);
    }
    return (
      <div >
        <span className="tria"></span>
        <div  className="notification-box">
            <div className="notification-box-header row">
              <div className="ten columns">
                <p>All Notification</p>
              </div>
              <div className="two columns">
                <span>&#10006;</span>
              </div>
            </div>
            <div className="notification-box-body">
              <div className="notification-content">
                    {para}
              </div>
            </div>
        </div>
      </div>

    )
  }
}

export default graphql(allNotification,{
  name : "allNotification",
  options : (value)=>({
    variables : {
      userID : value
    }
  })
})(NotificationBox);