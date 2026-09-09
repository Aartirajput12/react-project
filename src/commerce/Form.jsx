import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 const Sign = () => { 
  const navigate = useNavigate(); 
  const [formData, setData] = useState({
     email: "",
      address: "",
       mobile: "",
     });
      const [errorMessage, setMessage] = useState("");
       const handleChange = (event) => {
         const { name, value } = event.target;
          setData({ ...formData, [name]: value });
         }; 
         
 const handleSubmit = (event) => { 
  event.preventDefault()
   if (!formData.name || !formData.mobile || !formData.address) { 
    setMessage("All fields are required"); 
    return
  } 
  if (formData.mobile.length !== 10) 
    { setMessage("Mobile number must be 10 digits")
       return
       }
        localStorage.setItem("userData", JSON.stringify(formData));
         navigate("/Pay");
         }; 
         


         return ( 
        <> 
 <div style={{minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center",marginTop:"-60px" }} >
           
 <form onSubmit={handleSubmit} 
style={{ width: "600px",
 backgroundColor: "#ffffff",
  border: "1px solid #ddd", borderRadius: "15px",
   padding: "40px",
 boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
  fontSize: "18px", }} > 
  
 <h2 style={{ textAlign: "center", marginBottom: "35px", color: "#222", fontSize: "30px", }} > Enter Your Details </h2> 


<label style={{fontWeight:"bold"}} >Email </label>
    <input 
    style={{
       width: "100%", 
       height: "45px",
        padding: "0 15px",
         boxSizing: "border-box",
          textAlign: "left", 
          border: "1px solid #ccc", 
          borderRadius: "8px",
     fontSize: "16px",
       }}
 type="text"
  name="name" 
  value={formData.name}
   onChange={handleChange} />
    <br /> <br /> 


    <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#333", }} > Mobile </label> 
    <input 
    style={{
       width: "100%",
        height: "45px", 
     textAlign: "left",
      border: "1px solid #ccc", 
      borderRadius: "8px", 
       fontSize: "16px", }}
        type="number" 
        name="mobile" 
        value={formData.mobile} 
        onChange={handleChange} />
         <br /> <br /> 


 <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#333", }} > Address </label> 
<input 
style={{
   width: "100%",
    height: "45px",
     textAlign: "left",
      border: "1px solid #ccc", 
      borderRadius: "8px", 
       fontSize: "16px", }} 
   type="text"
    name="address" 
    placeholder="City, near by"
     value={formData.address}
      onChange={handleChange} />
       <br /> <br /> 
       
        <label htmlFor="inputState" style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#333", }} > State </label>
<select id="inputState" className="form-select" 
style={{ width: "100%", height: "45px", padding: "0 15px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff", fontSize: "16px", outline: "none", }} >
   <option selected>Choose...</option>
    <option>chandigarh</option>
     <option>haryana</option> 
     <option>punjab</option>
      </select> 
      
       <p style={{ color: "red", textAlign: "center", fontSize: "18px", minHeight: "20px", marginTop: "20px", }} >
         {errorMessage} 
         </p>
     <button type="submit" style={{ display: "block", width: "180px", height: "45px", margin: "10px auto 0", backgroundColor: "#222", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "600", cursor: "pointer", }} >
       Submit 
     </button>
      </form> 
     </div>
      </> 
     ); };
      export default Sign;