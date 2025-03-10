import React from 'react'
import Subject from './Subject';

const Students = () => {
  return (
    <div style={{backgroundColor: 'lightgreen', padding: 10}}>
        <h2 className="text-2xl font-semibold my-5 py-5 px-3">Student Component</h2>
        <Subject/>
    </div>
  )
}

export default Students;