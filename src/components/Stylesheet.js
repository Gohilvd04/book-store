import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    // let className = props.primary? 'primary' : ''
    const heading ={
        fontSize:'200px',
        textAlign:'center'
    }
  return (
    <div>
        <h1 style={heading }>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet