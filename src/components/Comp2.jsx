import React from 'react'
import Comp3 from './Comp3'

export default function Comp2({myname,setName}) {
  return (
    <div>Comp2
        <Comp3 name={myname} setName={setName}/>
    </div>
  )
}

// import React from 'react'

// const Comp2 = ({user}) => {
//   return (
//     <div>{user}</div>
//   )
// }

// export default Comp2