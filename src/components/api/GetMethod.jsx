import React, { useEffect, useState } from 'react'

const GetMethod = () => {
    const [userData, setUserData]= useState([]);

    useEffect(()=>{
        getUserData();
    }, [])

   const getUserData = async () => {
        const url="https://dummyjson.com/users";
        let response = await fetch(url)
        response = await response.json()
        console.log(response.users);
        setUserData(response.users)
    }

    console.log(userData);
    

  return (
    <div className='p-4'>
        <h1 className='text-2xl font-semibold mb-2'>Fetch Data from API</h1 >
        <ul className='flex justify-around font-bold border p-2.5'>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Age</li>
            <li></li>
        </ul>
        
        {
            userData.map((user) => (
               <ul className='flex justify-around border p-2.5'>
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
                <li>{user.age}</li>
               </ul>
            ))
        }
    </div>
  )
}

export default GetMethod;