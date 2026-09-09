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

<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="hhh">
  <div className="carousel-inner" >
    <div className="carousel-item active" >
      <img src="https://media.istockphoto.com/id/1398151036/photo/young-woman-in-linen-shirt-is-holding-sunglasses-on-head-and-glancing-to-the-side.jpg?s=612x612&w=0&k=20&c=D1KFwv3TrJ2q6Cm4uugr3yWEVeMMHEF2Cu_99vlPe7Q=" className="d-block w-100" alt="..." style={{height:"700px"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{paddingLeft:"800px",fontSize:"150px",marginTop:"-520px"}}>Women Fashion</h5>
        <img src="https://cdn-icons-png.flaticon.com/128/15893/15893074.png" style={{marginLeft:"380px",height:"120px",marginTop:"-700px"}}/>
        <img src="https://cdn-icons-png.flaticon.com/128/15893/15893074.png" style={{marginLeft:"1300px",height:"120px",marginTop:"-200px"}}/>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1652454108001-ccfbcaa87d24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" className="d-block w-100" alt="..." style={{height:"700px"}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5 style={{paddingLeft:"800px",fontSize:"150px",marginTop:"-500px"}}>Women Fashion</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww" className="d-block w-100" alt="..." style={{height:"700px"}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5 style={{fontSize:"140px",marginTop:"-680px",marginLeft:"-1000px"}}>Women <br/>Fashion</h5>
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


     

<div
      style={{
        display: "flex",
        justifyContent: "space-around",marginTop:"20px"
      }}
    >
      {Products.map((product) => (
        <div
          className="card"
          style={{ width:"220px",border:"1px solid",borderColor:"skyblue"}}
          key={product.id}
        >
              <NavLink to={product.link}>
          <img
            src={product.image}
            className="card-img-top"
           style={{height:"200px"}}/></NavLink>

          <div className="card-body" style={{backgroundColor:"skyblue"}}>
            <h5 className="card-title" style={{textAlign:"center"}}>
              {product.title}
            </h5>

          </div>
        </div>
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


