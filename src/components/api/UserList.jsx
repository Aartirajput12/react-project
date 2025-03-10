import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])

 const getUserData =async() => {
    const url="https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
 }

  return (
    <div className='p-5'>
        {/* <h1 className='font-bold text-2xl mb-4'>Integrate JSON Server API and Loader</h1> */}
        <h1 className='font-bold text-2xl mb-4'>Make Routes and Pages for Add User List UI</h1>

        <ul className='flex justify-around border font-bold p-2.5'>
              <li>Name</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
        {
          !loading?
          userData.map((user)=> (
            <ul key={user.name} className='flex justify-around border p-2.5'>
              <li>{user.name}</li>
              <li>{user.phone}</li>
              <li>{user.email}</li>
            </ul>
          ))
         :<h1>Data Loading...</h1>
        }
    </div>
  )
}

export default UserList;