import React from 'react'
import Comp2 from './Comp2'

export default function Comp1({name,setName}) {
  return (
    <div>Comp1
        <Comp2 myname={name} setName={setName}/>
    </div>
  )
}

// import React from 'react'
// import Comp2 from './Comp2'

// const Comp1 = ({setUser}) => {
//   return (
//    <div>
//      <div className='text-2xl ml-2 font-semibold mb-2'>Comp1</div>
//      <input className='border ml-2 mb-3' onChange={(event) => setUser(event.target.value)} type="text" placeholder='enter anything'/>
//      <hr />
//    </div>
//   )
// }

// export default Comp1