import React from 'react'
import { NavLink } from 'react-router-dom'
const UI = () => {
  const Products = [
    {
      id: 1,
image:
        "https://plus.unsplash.com/premium_photo-1669703777428-48a39ccfe8cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" ,
        title: "Tops",
        link: "/Product1",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
          title: "Dresses",
          link: "/Product2",
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1733937111165-36efb3ded769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVobmdhfGVufDB8fDB8fHww",
            title: "Lehnga",
            link: "/Product3",
          },
          {
            id: 4,
            image:
              "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
              title: "Dresses",
              link: "/Product4",
            },
        {
          id:5,
          image:"https://images.unsplash.com/photo-1767884045466-eb93355316e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
          title:"Cord-set",
          link: "/Product55",
        },
        {
        id:6,
        image:"https://images.unsplash.com/photo-1756483509254-3cc48a5a15b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWRpdGlvbmFsJTIwd2VhciUyMG1vZGVsfGVufDB8fDB8fHww",
        title:"Ethnic wear", 
        link: "/Product6", 
        },
{
  id:7,
  image:"https://plus.unsplash.com/premium_photo-1664874602822-91dd10ae6a31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBib3R0b218ZW58MHx8MHx8fDA%3D" ,
  title:"Bottom wear",
  link: "/Product7",
}

    ]



  return (
<>

<style>{`

/* ================================
   CATEGORY CONTAINER
================================ */

.category-container {
  width: 95%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
}


/* ================================
   CATEGORY CARD
================================ */

.category-card {
  width: 100%;
  min-width: 0;
  text-decoration: none;
  color: black;
  background: white;
  border: 1px solid skyblue;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}


/* ================================
   CATEGORY IMAGE
================================ */

.category-card img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}


/* ================================
   CATEGORY NAME
================================ */

.category-name {
  width: 100%;
  background-color: skyblue;
  text-align: center;
  padding: 10px 3px;
  font-size: 16px;
  font-weight: 500;
}


/* ================================
   LAPTOP
================================ */

@media (max-width: 1200px) {

  .category-container {
    width: 96%;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
  }

  .category-card img {
    height: 150px;
  }

  .category-name {
    font-size: 14px;
  }
}


/* ================================
   TABLET
================================ */

@media (max-width: 992px) {

  .category-container {
    width: 94%;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  .category-card img {
    height: 250px;
  }

  .category-name {
    font-size: 16px;
  }
}


/* ================================
   SMALL TABLET
================================ */

@media (max-width: 768px) {

  .category-container {
    width: 92%;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .category-card img {
    height: 200px;
  }

  .category-name {
    font-size: 15px;
  }
}


/* ================================
   MOBILE
================================ */

@media (max-width: 576px) {

  .category-container {
    width: 92%;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .category-card img {
    height: 180px;
    width:"100%"
  }

  .category-name {
    font-size: 14px;
    padding: 9px 2px;
  }
      .last-category-card {
  text-align: center;

    grid-column: 1 / -1;
  }
}
}


/* ================================
   VERY SMALL MOBILE
================================ */

@media (max-width: 350px) {

  .category-container {
    width: 94%;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .category-card img {
    height: 230px;
  }

  .category-name {
    font-size: 16px;
  }
}

`}</style>













<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="hhh">
  <div className="carousel-inner" >
    <div className="carousel-item active" >
      <img src="https://media.istockphoto.com/id/1398151036/photo/young-woman-in-linen-shirt-is-holding-sunglasses-on-head-and-glancing-to-the-side.jpg?s=612x612&w=0&k=20&c=D1KFwv3TrJ2q6Cm4uugr3yWEVeMMHEF2Cu_99vlPe7Q=" className="d-block w-100 carousel-img" alt="..." />
      <div className="carousel-caption">
  <h5 className="fashion-title">
    <span>Women</span>
    <span>Fashion</span>
  </h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1652454108001-ccfbcaa87d24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" className="d-block w-100 carousel-img" alt="..." />
      <div className="carousel-caption">
  <h5 className="fashion-title">
    <span>Women</span>
    <span>Fashion</span>
  </h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww" className="d-block w-100 carousel-img" alt="..." />
      <div className="carousel-caption">
  <h5 className="fashion-title">
    <span>Women</span>
    <span>Fashion</span>
  </h5>
      </div>
    </div>
  </div>
</div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


     

<div className="category-container">
  {Products.map((item) => (
   <NavLink
   to={item.link}
   key={item.id}
   className={`category-card ${
     item.id === 7 ? "last-category-card" : ""
   }`}
 >
      <img src={item.image} alt={item.name} />

      <div className="category-name">
        {item.title}
      </div>
    </NavLink>
  ))}
</div>

    </>
  )
}

export default UI











































































{/* <div className="grp" style={{ display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
<div className="card" style={{height:"270px",border:"1px solid",borderColor:"skyblue"}}>
  <img src="https://plus.unsplash.com/premium_photo-1669703777428-48a39ccfe8cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" className="card-img-top" alt="..." style={{height:"200px",width:"230px"}}/>
  <div className="card-body" style={{backgroundColor:"skyblue"}}>
    <h5 className="card-title">Card title</h5>
  </div>
</div>

<div className="card" style={{height:"270px",border:"1px solid",borderColor:"skyblue"}} >
  <img src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." style={{height:"200px",width:"230px"}}/>
  <div className="card-body" style={{backgroundColor:"skyblue"}}>
    <h5 className="card-title">Card title</h5>
  </div>
</div>

<div className="card"  style={{height:"270px",border:"1px solid",borderColor:"skyblue"}}>
  <img src="https://images.unsplash.com/photo-1733937111165-36efb3ded769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVobmdhfGVufDB8fDB8fHww" className="card-img-top" alt="..." style={{height:"200px",width:"230px"}}/>
  <div className="card-body" style={{backgroundColor:"skyblue"}}>
    <h5 className="card-title">Card title</h5>
  </div>
</div>

<div className="card" style={{height:"270px",border:"1px solid",borderColor:"skyblue"}} >
  <img src="https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." style={{height:"200px",width:"230px"}}/>
  <div className="card-body" style={{backgroundColor:"skyblue"}}>
    <h5 className="card-title">Card title</h5>
  </div>
</div>

<div className="card" style={{height:"270px",border:"1px solid",borderColor:"skyblue"}} >
  <img src="https://images.unsplash.com/photo-1767884045466-eb93355316e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" className="card-img-top" alt="..." style={{height:"200px",width:"230px"}}/>
  <div className="card-body" style={{backgroundColor:"skyblue"}}>
    <h5 className="card-title">Card title</h5>
  </div>
</div> 

<div className="card" style={{height:"270px",border:"1px solid",borderColor:"skyblue"}} >
  <img src="https://images.unsplash.com/photo-1756483509254-3cc48a5a15b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWRpdGlvbmFsJTIwd2VhciUyMG1vZGVsfGVufDB8fDB8fHww" className="card-img-top" alt="..." style={{height:"200px",width:"230px"}}/>
  <div className="card-body" style={{backgroundColor:"skyblue"}}>
    <h5 className="card-title">Card title</h5>
  </div>
</div>

<div className="card" style={{height:"270px",border:"1px solid",borderColor:"skyblue"}} >
  <img src="https://plus.unsplash.com/premium_photo-1664874602822-91dd10ae6a31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBib3R0b218ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." style={{height:"200px",width:"230px"}}/>
  <div className="card-body" style={{backgroundColor:"skyblue"}}>
    <h5 className="card-title">Card title</h5>
  </div>
</div> 
</div> */}


