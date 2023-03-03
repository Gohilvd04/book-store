import React from 'react'

export default function Title(props) {
  const {name,desc} = props.person
  return (
    // <div>
    //   <h1>{title}</h1>
    //   <p>{disc}</p>

    // </div>
    <div>
        <h1>{name}  {desc}</h1>
    </div>
  )
}
