import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import List from './components/List'
import Stylesheet from './components/Stylesheet' 
import './components/myStyle.css'
import Title from './components/Title'
import LoginForm from './components/LoginForm'
import FocusInput from './components/FocusInput'

import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      isHome:false,
  //      isAbout:false
  //   }
  // }
  // handleHome = ()=>{
  //   this.setState({
  //     isHome:true
  //   })
  // }

  // handleAbout = ()=>{
  //   this.setState({
  //     isAbout:true
  //   })
  // }

  render() {
    return (
      // this.state.isHome?
      // (
      //   <Home />
      // ) :
      // this.state.isAbout ?
      // (
      //   <About/>
      // ) :
      // (
      // <div>
      //   <button onClick={this.handleHome}>Home</button>
      //   <button onClick={this.handleAbout}>About</button>
      // </div>
      // )

      // <div className="App">
      //   <List />
      // </div>

      <div>
        {/* <Stylesheet primary={true} /> */}
        {/* <h1 className="error">Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        <LoginForm />
        {/* <FocusInput /> */}
        {/* <List /> */}
      </div>
    )
  }
}

export default App
