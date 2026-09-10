import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Success = () => {
const navigate=useNavigate();


const handleCount=()=>{
  navigate("/")
}


  return (
    <div
      style={{
        backgroundColor: "#d4edda",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "green" }}>
        Order Successfully!
      </h2>
<div style={{marginTop:"150px",marginLeft:"-200px"}}>
      <button className="btn btn-dark"   onClick={handleCount}>Continue Shopping</button>
    </div></div>
  )
}

export default Success