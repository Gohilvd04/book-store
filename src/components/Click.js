import React from 'react'

function Click() {
    const clickHandler = ()=>{
        console.log("Clicked")
      }
  return (
    <div>
        <button onClick={clickHandler}>click</button> {/*Event handler is function ...... not function call*/}
    </div>
  )
}

export default Click