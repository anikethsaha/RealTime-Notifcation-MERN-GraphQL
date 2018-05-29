import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import PreLoadDiv from './preload-content'
import DocsContent from './docsContent'
const getTransaction = gql`
    {
      Transactions {
          _Tid
          _Mid
          recieverAccountName
          recieverAccountNumber
          senderAccountNumber
          senderAccountName
          Amount
        }
    }
`;
 class TransactionContent extends React.Component{
   constructor(){
     super();
     this.displayTransaction = this.displayTransaction.bind(this);
   }
  displayTransaction(){
    var data = this.props.data;
    if(data.loading){
        return ( <div><PreLoadDiv /></div> );
    } else {
        console.log(data);
        return data.Transactions.map((transaction,i) => {
            return(
                <DocsContent
                  i={i}
                  h1={transaction.recieverAccountName}
                  span={transaction._Mid}
                  p={transaction.senderAccountName}
                  a={transaction._Tid}/>
            );
        })
    }
}
  render(){
    return (
      <div>
        {this.displayTransaction()}
      </div>
    )
  }
}
export default graphql(getTransaction)(TransactionContent);
