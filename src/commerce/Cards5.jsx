import React from 'react'
import { useState } from 'react';
const Cards5 = ({ count, setCount }) => {

      const [addedProducts, setAddedProducts] = useState([]);
       const handleAdd = (productId) => { 
          if (addedProducts.includes(productId)) { return; } 
          setAddedProducts((prev) => [...prev, productId]); 
          setCount((prevCount) => prevCount + 1); }
  const items = [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=900&auto=format&fit=crop&q=60",
            title: "Dress",
          description: "price:5,000",
          },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.jpg?s=612x612&w=0&k=20&c=UzOoNF1-F6pR5uSu6mTqnPAYR4eg6paDy4FKfhYVInU=",
            title: "Dress",
          description: "price:5,000",
          },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1662245336484-99d8ee24ec30?w=900&auto=format&fit=crop&q=60",
            title: "Shoes",
            description: "price:10,000",
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1662245336484-99d8ee24ec30?w=900&auto=format&fit=crop&q=60",
            title: "Shoes",
            description: "price:10,000",
        },
      ];




    return (
    <div style={{display: "flex",justifyContent: "space-around",marginTop:"20px"}}>
      {items.map((item) => (
        <div className="card" style={{ width: "25rem" }}          
          key={item.id}
        >
          <img src={item.image}/>

          <div className="card-body">
            <h5 className="card-title">
              {item.title}
            </h5>

            <p className="card-text">
              {item.description}
            </p>
            <button className="btn btn-primary" onClick={() => handleAdd(item.id)} > Add to Cart </button>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }} >Buy Now </button>
          </div>
        </div>
      ))}
    </div>
  );
 };
      
export default Cards5