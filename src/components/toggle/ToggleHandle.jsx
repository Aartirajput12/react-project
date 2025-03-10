import React from 'react'
import UseToggle from './UseToggle';

const ToggleHandle = () => {
  const [value, toggleValue] = UseToggle(true);

  return (
    <div className='my-4'>
        <button onClick={toggleValue} className='bg-gray-300 p-3 ml-4 cursor-pointer'>Toggle Heading</button> 
        <button onClick={()=> toggleValue(false)} className='bg-gray-300 p-3 ml-4 cursor-pointer'>Hide Heading</button>
        <button onClick={()=> toggleValue(true)} className='bg-gray-300 p-3 ml-4 cursor-pointer'>Show Heading</button>
        {
        value?<h1 className='text-2xl font-semibold ml-4 mt-5'>Custom Hooks in React Js</h1>:null
        }

    </div>
  )
}

export default ToggleHandle;