import React, { useState } from 'react'

const DerivedState = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('');

    const handleAddUsers = () => {
      if(users.includes(user)) {
        alert('User name is already exist')
      }
      else{
        setUsers([...users, user])
        console.log(user);
      }
    }
    const total=users.length;
    const last=users[users.length-1];
    const unique= [...new Set(users)].length
    
  return (
    <div className='m-4'>
        <h2>Total user: {total}</h2>
        <h2>Last user: {last}</h2>
        <h2>Unique total user: {unique}</h2>

        <input className='border' type="text" onChange={(event) => setUser(event.target.value)} placeholder='add new user' />
        <br />
        <button onClick={handleAddUsers} className='bg-gray-300 py-2 px-4 mt-3'>Add User</button>
        {users.map((item, index) => (
            <h4 key={index}>{item}</h4>
        ))}
    </div>

  )
}

export default DerivedState;