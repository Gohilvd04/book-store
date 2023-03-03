import React from 'react'
import '../Title.css'

 function Title({person}) {
  const {name,desc} = person
  

  return (
    // <div>
    //   <h1>{title}</h1>
    //   <p>{disc}</p>

    // </div>
    
    <div>
        <h1 style={{}} >{name}  {desc}</h1>
    </div>
  )
}

export default React.memo(Title)
