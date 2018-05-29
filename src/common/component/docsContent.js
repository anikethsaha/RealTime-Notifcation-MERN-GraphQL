import React from "react"
import fetch from 'isomorphic-fetch'

export default class DocsContent extends React.Component{
  constructor(){
    super();
    this.state = {
      Posts : [
        {
          "UserId" : 1,
          "Id" : 1,
          "Title" : "to provide or to reject the blind are welcome option to find",
          "Body" : "And it takes \ nsuscipit follow accepted lightly with \ nreprehenderit discomfort may be the entire \ nnostrum of the things that happens is that they are extremely"
        },
        {
          "UserId" : 1,
          "Id" : 2,
          "Title" : "that was",
          "Body" : "is existed at the time of life \ 'Blessed are the pain of her pains, nor condemn nseq they are nothing \ nfugiat or not at all the blandishments of pleasure, and the discomfort may rejecting some \ nWho, not being due, we may be able to open the man who did not, but there is no"
        },
        {
          "UserId" : 1,
          "Id" : 3,
          "Title" : "those who reject the troubles they exercise that is either",
          "Body" : "and on the right, but \ nvoluptatis blinded to the election or \ nvoluptatis pains or denouncing any resultant \ nmolestiae on his work and wants to hate or"
        },
        {
          "UserId" : 1,
          "Id" : 4,
          "Title" : "it will be blinded",
          "Body" : "rejects any and often experience pleasure \ mānsit lot of things to take to provide fault \ nquir here the opportunity to do the right bound pain \ nFor the pleasure of the outdoor"
        },
        {
          "UserId" : 1,
          "Id" : 5,
          "Title" : "do you hate",
          "Body" : "I look for things, but rejected \ nal or to avoid it, but it is \ nvoluptatis all the pleasures of what we can \ nest bound or no pain"
        }

      ]
    };

  }
  componentDidMount(){
    console.log(this.PostArray);
  }
  render(){

    return (
      <div className="content-wrapper">
            {this.state.Posts.map((post,i) => {
              
              return (
                <div key={i} className="post-content-div">
                  <div className="">
                      <div className = " content-title">
                          <h1>{post.Title}</h1>
                      </div>
                      <div className = " content-body">
                          <p>{post.Body}</p>
                      </div>
                      <span>{post.id}</span>
                  </div>
                </div>
            )
            })}
      </div>
    )
  }
}
