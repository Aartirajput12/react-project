import React, {useState} from 'react'

const State = () => {
   const [count, setCount] = useState(0);

  //  const updateData = () => {
  //       setData(data + 1)
  //   }

  // const handleClick = () => (
  //   setCount(count + 1)
  // )

  // function fruit() {
  //   return "apple"
  // }

  // function sum(a,b) {
  //   return a+b;
  // }

  // const handleClick = () => (
  //   alert("hello everyone")
  // )

  // function operation (a,b, op) {
  //   if(op==="+")
  //   {
  //     return a+b;
  //   }
  //   else if(op==="-")
  //   {
  //     return a-b;
  //   }
  //   else{
  //     return a*b;
  //   }
  // }

  // const name="abcd";

  // const userobj = { 
  //   name: "abc",
  //   email: "abc@gmail.com",
  // }

  

  return (
    <div className='text-center'>
        {/* <h1>{data}</h1> */}
        {/* <button className='bg-gray-400 p-3 rounded-lg text-white cursor-pointer' onClick={updateData}>Update Data</button> */}

        {/* <h1 className='text-2xl'>{count}</h1>
        <button className='bg-gray-400 p-3 rounded-lg text-white cursor-pointer' onClick={handleClick}>increment value</button> */}

      {/* <button className='cursor-pointer bg-gray-200' onClick={handleClick}>click me</button> */}
      {/* {fruit()} */}
      {/* {sum(100,100)} */}
      {/* {operation(5,5, "")} */}
      {/* {name?name: "user not found"} */}
      {/* {userobj.email} */}
    </div>
  )
}

export default State