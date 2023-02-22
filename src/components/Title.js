import React from 'react'

export default function Title(props) {
  const {title,disc} = props
  return (
    <div>
      <h1>{title}</h1>
      <p>{disc}</p>
    </div>
  )
}
