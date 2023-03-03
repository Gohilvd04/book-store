import React, { Component } from 'react'
import Title from '../components/Title'
import '../Title.css'
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
        <Title title="Home" disc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia similique optio harum facere porro quis earum aperiam esse a qui quam commodi consectetur non sed nam libero, tempora fugit! Sit.
      Exercitationem corrupti laborum officia accusamus consectetur magni atque! Quasi, possimus laborum. Quibusdam nam id, perspiciatis quam corporis repudiandae hic nemo laudantium architecto adipisci cumque dolores dicta iure, quas qui dolorum?
      Rerum quo esse eligendi velit unde dignissimos soluta repellat repellendus odit ratione, numquam, dolorem natus voluptate ut aliquid laboriosam ab perferendis quis facere voluptas. Laboriosam nesciunt ipsam culpa vitae placeat.
      Distinctio perspiciatis vel, doloribus repellat laboriosam consequatur nulla hic iure porro assumenda, laborum molestiae? Corporis nostrum nesciunt quam deserunt, in asperiores ipsum suscipit voluptas autem doloribus omnis quo aperiam fuga.
      Voluptatibus nobis similique obcaecati doloribu"/>
        {/* <Title title={this.state.message} disc={this.state.disc}/> */}
        {/* <Title title="happen by props1" />
        <Title title="happen by props2" /> */}
        {/* <button onClick={()=>this.changeMessage()}>Subscribe</button> */}
      </div>
    )
  }
}
