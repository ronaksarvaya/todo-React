import React, { useState } from 'react'

const SearchBar = ({input,setInput}) => {
   
  return (

    <div>
        <input type="text" placeholder='Start searching here...' onChange={(e)=>setInput(e.target.value)}/>
        <div>{input}</div>
        
    </div>
  )
}

export default SearchBar
// const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis"];
