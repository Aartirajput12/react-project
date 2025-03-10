import React, { useState } from 'react'

const Usestate = () => {
    const [fruit, setFruit] = useState("apple");

    const handleFruitChange = () => (
        setFruit("banana")
    )

  return (
    <>
        <div className='text-center'>
            <h1>{fruit}</h1>
            <button className='bg-gray-200 p-4 cursor-pointer' onClick={handleFruitChange}>changed fruit</button>
        </div> 
    </>
  )
}

export default Usestate;