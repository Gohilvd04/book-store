import React from 'react'

function Person({person}) {
  return (
    <div>
        <h1>{person.id}. Name is {person.name}</h1>
    </div>
  )
}

export default Person