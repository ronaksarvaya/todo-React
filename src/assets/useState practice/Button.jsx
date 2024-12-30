import React from 'react'

const Button = () => {
    
function cl(){
    console.log('click')
  }
  return (
    <div>
      <button onClick={cl}>hi</button>
    </div>
  )
}

export default Button
