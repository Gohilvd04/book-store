import React, { Component } from 'react'
import Title from '../components/Title'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Title title="happen by props" />
        <Title title="happen by props1" />
        <Title title="happen by props2" />
      </div>
    )
  }
}
