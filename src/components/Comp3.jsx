import React from 'react'

export default function Comp3({name,setName}) {

  return (
    <div>Comp3
        <h1>My name is {name}</h1>
        <button onClick={()=>setName("swami")}>Click</button>
    </div>
  )
}
