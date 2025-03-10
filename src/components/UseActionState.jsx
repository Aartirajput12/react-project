import React from 'react'

const UseActionState = () => {
  return (
    <div className='m-4'>
        <h1 className='text-2xl font-semibold mb-4'>Use Action State</h1>
        <form action="">
            <input className='border mb-3' type="text" placeholder='enter name' name='name'/>
            <br />
            <input className='border mb-3' type="text" placeholder='enter password' name='password'/>
            <br />
            <button className='bg-gray-300 p-3 cursor-pointer'>Submit Data</button>
        </form>
    </div>
  )
}

export default UseActionState;