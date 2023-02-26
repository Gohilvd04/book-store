import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isHome:false,
       isAbout:false
    }
  }
  handleHome = ()=>{
    this.setState({
      isHome:true
    })
  }

  handleAbout = ()=>{
    this.setState({
      isAbout:true
    })
  }

  render() {
    return (
      this.state.isHome?
      (
        <Home />
      ) :
      this.state.isAbout ?
      (
        <About/>
      ) :
      (
      <div>
        <button onClick={this.handleHome}>Home</button>
        <button onClick={this.handleAbout}>About</button>
      </div>

      )
    )
  }
}

export default App