// // import React,{useState,useMemo} from 'react'


// // const items=[
// //     {id:1,name:"Apple"},
// //     {id:1,name:"Mango"},
// //     {id:1,name:"Banana"},
// //     {id:1,name:"Cherry"},
// //     {id:1,name:"Orange"},
// //     {id:1,name:"Strawberry"}
// // ];
// // const Filter1 = () => {

// //     const[search,setSearch]=useState("");


// // const filteritems=useMemo(()=>{
// // return items.filter((item) =>
// //     item.name.toLowerCase().includes(search.toLowerCase())

// // }
// // },[search]);



// //   return (
// //     <div>
// // <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
// // <ul>
// //     {filteritems.map((item)=>(
// // <li key={item.id}>{item.name}</li>
// //     ))}
// // </ul>
// // </div>
// //   )
// // }

// // export default Filter1

// //  //which is a built-in React hook used to memoize expensive calculations

// // // //useMemo returns a memoized value. It only recomputes the value when one of its dependencies has changed.

// // // // The useMemo hook in React is used for performance optimization. It helps prevent unnecessary computations by memoizing values, meaning it remembers the result of a computation so that it doesn't have to re-run unless dependencies change.


// // // // "Computation" refers to the process of performing mathematical calculations or executing logical operations,
// // // // - When you have heavy computations (like filtering large lists, sorting, or complex math), useMemo caches the result so it doesn’t re-run unless dependencies change




// import React, { useMemo, useState } from "react";

// const elec = [
//   {name: "laptop-Electronics" },
//   {name: "smartphones-Electronics" }
// ];

// const cloth = [
//   {  name: "jeans-clothes" },
//   {  name: "shirt-clothes" }
// ];

// const filter1= () => {
//   const [category, setCategory] = useState("");

//   // Combine both arrays
//   const data = [...elec, ...cloth];

//   // useMemo filters data only when category changes
//   const el = useMemo(() => {
//     if (category === elec) {
//       return elec;
//     }

//     if (category === cloth) {
//       return cloth;
//     }

//     return data;
//   }, [category]);

//   const all = () => {
//     setCategory(data);
//   };

//   const electro = () => {
//     setCategory(elec);
//   };

//   const clo = () => {
//     setCategory(cloth);
//   };

//   return (
//     <>
//       <button onClick={all}>Show All</button>
//       <button onClick={electro}>Show Electronics</button>
//       <button onClick={clo}>Show Clothes</button>

//       <h2>Products</h2>

//       {el.map((item) => (
//         <p key={item.id}>{item.id}{item.name}</p> 
//       ))}
    
//          </>
//   );
// };

// export default filter1;