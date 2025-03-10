import React from 'react'
import { useRef } from 'react';

const UserefFunction = () => {

    const inputRef = useRef(null);
    const h1Ref = useRef(null);

    const inputHandler = () => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="purple"
        inputRef.current.placeholder="enter password"
        inputRef.current.value="12345"
    }
    const toggleHandler=()=> {
   if(   inputRef.current.style.display!="none"){
             inputRef.current.style.display="none"
   }
   else{
       inputRef.current.style.display="inline"
   }
    }

    const h1Handler=() =>{
      h1Ref.current.style.color="purple"
    }

  return (
    <>
        <h1>UseRef</h1>
        <button className='border' onClick={toggleHandler}>focus on input field</button>

        <input className='border' ref={inputRef} type="text" placeholder='enter username'/>
        <button className='border' onClick={inputHandler}>focus on input field</button>

        <h1 ref={h1Ref}>hello user</h1>
        <button className='border' onClick={h1Handler}>Handler</button>

    </>
  )
}

export default UserefFunction;