import React, { Component } from 'react'
import Title from '../components/Title'

class About extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title:"About",
         disc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos veritatis fugit rerum culpa et. Expedita,"
      }
    }
    
    render() {
        return (
            <div>
                <Title title={this.state.title} disc={this.state.disc}/>
                {/* <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos veritatis fugit rerum culpa et. Expedita, consequatur id blanditiis similique quos neque, culpa ipsum magni accusamus cum, ex hic mollitia accusantium? Nulla ea impedit maiores tempore nihil doloribus, suscipit incidunt velit accusantium culpa molestias.</p> */}
            </div>
        )
    }
}

export default About