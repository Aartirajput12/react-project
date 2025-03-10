import React, { useEffect, useRef, useState } from 'react'

const CheckBox = () => {

  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    if(event.target.checked)
      {
      console.log(skills);  
      setSkills([...skills,event.target.value])
    }
    else{
      setSkills([...skills.filter((item) => item!=event.target.value)])
    }
  }

const [count,setCount]=useState(0)
const elementRef =useRef()

function handleClick(){
elementRef.current.style.color="red"
}
  return (
    <div className=' py-5'>
      <h1 ref={elementRef}>vikraM SWAMI</h1>
      <button onClick={handleClick}>click</button>
        <h3 className='font-semibold text-2xl mb-3'>Select Your Skills : handle checkbox</h3>
        <input onChange={handleSkills} type="checkbox" id='php' value="php"/>
        <label htmlFor="php">PHP</label>
        <br />
        <input onChange={handleSkills} type="checkbox" id='js' value="js"/>
        <label htmlFor="js">JS</label>
        <br />
        <input onChange={handleSkills} type="checkbox" id='react' value="react"/>
        <label htmlFor="react">REACT</label>  
        <br />
        <input onChange={handleSkills} type="checkbox" id='node' value="node"/>
        <label htmlFor="node">NODE</label>
        <h1 className='font-bold text-xl'>{skills.map((item,i)=>(item+","))}</h1>
    </div>
  )
}

export default CheckBox;