import React, { useState } from 'react'

const UpdatingObjects = () => {
    const [name, setName] = useState('update name')
  return (
    <div className='p-5'>
        <h1 className='text-2xl font-semibold'>Updating Objects</h1>
        <h2 className={`text-xl ${name==="Avni"? "text-purple-600" : name==="Aarti Rajput"? "text-red-600" : "text-black"} mt-2`}>{name}</h2>
        <button className='bg-gray-300 p-4 my-4 cursor-pointer' onClick={() => setName(name==='Avni'? 'Aarti Rajput': 'Avni')}>Update Name</button>
    </div>
  )
}

export default UpdatingObjects;