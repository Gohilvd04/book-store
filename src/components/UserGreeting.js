import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      login:true
    }
  }
  
  render() {

    // uisng short circuit operator
    return this.state.login && <div>Welcome Vishal</div>

    // Ternary operator

    // return this.state.login? 
    // (
    //   <div>Hello Vishal</div> 
    //   ) : (
    //   <div>Hello Guest</div>
    // )


    // using javascript variable

    // let message 
    // if(this.state.login) message = <div>Hello Vishal</div>
    // else message = <div>Hello Guest</div>

    // return(
    //   <div>{message}</div>
    // )


    // using simple if else condition and rendering jsx

    // if(this.state.login){
    //   return(
    //     <h1>Hello Vishal</h1>
    //   )
    // }
    // else{
    //   return(
    //     <h1>Hello Guest</h1>
    //   )
    // }
    // return (
    //   <div>UserGreeting</div>
    // )
  }
}

export default UserGreeting