import React from 'react'
import Students from './Students';

const ClassComponent = () => {
  return (
    <div style={{backgroundColor: "skyblue", padding: 10}}>
        <h2 className="text-2xl font-semibold my-5 py-5 px-3">Class Component</h2>
       <Students/>
    </div>
  )
}

export default ClassComponent;