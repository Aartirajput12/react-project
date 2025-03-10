import React, { useContext } from 'react'
import ContextData from './ContextData'

const Subject = () => {
    const sub = useContext(ContextData)
  return (
    <div  style={{ backgroundColor: "pink", padding:10 }}>
       <h2 className="text-2xl font-semibold my-5 py-5 px-3">
        Subject is: {sub}</h2>
    </div>
  )
}

export default Subject;