import React, { useState, useTransition } from 'react'

const UseTransitionHook = () => {
  const [pending, setPanding] = useState(false);

  const handleButton =() => {
    setPanding(true)
    setTimeout(() => {
      setPanding(false)
    }, 3000);
  }


  return (
    <div>
        <h1>UseTransitionHook in React</h1>
        {pending? 
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
        : null
      }
        <button disabled={pending} className={`${pending? 'bg-gray-200' : 'bg-gray-400'} py-2 px-4 m-4 cursor-pointer`} onClick={handleButton}>Click</button>

    </div>

    // <div>
    //     <h1>pure component</h1>
    //     <Cup guest={1}/>
    //     <Cup guest={2}/>
    //     <Cup guest={3}/>

    // </div>
  )
}

// const Cup=({guest}) => {
//   return (
//     <h1>we have {guest} and we have {guest}</h1>
//   )
// }

export default UseTransitionHook;