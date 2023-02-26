import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }

    //   this.clickHandler=this.clickHandler.bind(this)

    // instead of bind the function we can use arrow function as well ex. below clickHandler function
    }
    clickHandler = () => {
        this.setState({
            message:'GoodBye'
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default EventBind