import React from 'react'

const User = ({displayName}) => {

    // const displayName = (name) => {
    //     alert(name)
    // }

  return (
    <div>
        {/* <button className='bg-gray-300 p-3 m-4' onClick={() => displayName("anil")}>Display User</button> */}
        <button className='bg-gray-300 p-3 m-4' onClick={displayName}>Display Name</button>
    </div>
  )
}

export default User;