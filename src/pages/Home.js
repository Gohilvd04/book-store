import React, { Component } from 'react'
import Title from '../components/Title'
export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      message : 'This title from state',
      disc : 'This discription from state'
    }
  }
  // changeMessage(){
  //   this.setState({
  //     message:'Thank you for setting by state'
  //   })
  // }
  render() {
    return (
      <div>
        <Title title={this.state.message} disc={this.state.disc}/>
        {/* <Title title="happen by props1" />
        <Title title="happen by props2" /> */}
        {/* <button onClick={()=>this.changeMessage()}>Subscribe</button> */}
      </div>
    )
  }
}
