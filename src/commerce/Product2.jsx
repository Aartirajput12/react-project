import { NavLink } from 'react-router-dom';

const Product2 = ({ cartItems, setCartItems }) => {

  const handleAd = (product) => {
    const alreadyAdded = cartItems.find(
      (item) => item.id === product.id
    );

    if (alreadyAdded) {
      return;
    }

    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  return (
    <>

{/* RESPONSIVE CSS */}
<style>{`.grp44,.grp55 {display: flex; justify-content: space-around;gap: 20px; margin-top: 30px;flex-wrap: wrap;padding: 0 15px;}
  .grp44 .card,.grp55 .card {width: 25rem !important;}
.product-img { width: 100%;height: 400px;object-fit: cover;}
 .product-buttons {display: flex;gap: 10px;flex-wrap: wrap;}
/* TABLET */
  @media (max-width: 992px) {.grp44, .grp55 { justify-content: center;gap: 20px;}
.grp44 .card,.grp55 .card { width: 45% !important;}
.product-img { height: 350px; }}

  /* MOBILE */
  @media (max-width: 576px) { .grp44,.grp55 { display: flex !important;flex-direction: column !important;align-items: center !important; justify-content: center !important;gap: 20px !important; padding: 0 15px;}
.grp44 .card,.grp55 .card {width: 100% !important; max-width: 400px !important; }
 .product-img { width: 100% !important; height: 350px !important;object-fit: cover;}}

  /* SMALL MOBILE */
  @media (max-width: 375px) {.grp44,.grp55 { padding: 0 10px; }
.grp44 .card, .grp55 .card { width: 100% !important;max-width: 100% !important;}
 .product-img { height: 300px !important; }}
`}</style>



    <div style={{backgroundColor:"rgba(147, 143, 143, 0.12)"}}>
      <div
        className="grp55"
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop:"30px"
        }}
      >

        {/* PRODUCT 1 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1633077705107-8f53a004218f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBkcmVzc2VzfGVufDB8fDB8fHww"
            className="card-img-top"
            alt="Product 1"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleAd({
                  id: 15,
                  name: "Product 1",
                  price: 3000,
                  image:
                    "https://images.unsplash.com/photo-1633077705107-8f53a004218f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBkcmVzc2VzfGVufDB8fDB8fHww",
                })
              }
            >
              Add to Cart
            </button>

      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
          </div>
        </div>


        {/* PRODUCT 2 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
            className="card-img-top"
            alt="Product 2"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleAd({
                  id: 16,
                  name: "Product 2",
                  price: 4000,
                  image:
                    "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
                })
              }
            >
              Add to Cart
            </button>

      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
          </div>
        </div>


        {/* PRODUCT 3 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1673964714709-05e0c1a3a745?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
            className="card-img-top"
            alt="Product 3"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleAd({
                  id: 17,
                  name: "Product 3",
                  price: 12000,
                  image:
                    "https://plus.unsplash.com/premium_photo-1673964714709-05e0c1a3a745?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
                })
              }
            >
              Add to Cart
            </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
          </div>
        </div>

      </div>


      {/* SECOND ROW */}

      <div
        className="grp44"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >

        {/* PRODUCT 4 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRyZXNzZXN8ZW58MHx8MHx8fDA%3D"
            className="card-img-top"
            alt="Product 4"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleAd({
                  id: 18,
                  name: "Product 4",
                  price: 2000,
                  image:
                    "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRyZXNzZXN8ZW58MHx8MHx8fDA%3D",
                })
              }
            >
              Add to Cart
            </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
          </div>
        </div>


        {/* PRODUCT 5 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1715852700550-6436320162e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyZXNzZXN8ZW58MHx8MHx8fDA%3D"
            className="card-img-top"
            alt="Product 5"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleAd({
                  id: 19,
                  name: "Product 5",
                  price: 6000,
                  image:
                    "https://images.unsplash.com/photo-1715852700550-6436320162e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyZXNzZXN8ZW58MHx8MHx8fDA%3D",
                })
              }
            >
              Add to Cart
            </button>

       <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
          </div>
        </div>


        {/* PRODUCT 6 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1671576642314-11a11284ea36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRyZXNzZXN8ZW58MHx8MHx8fDA%3D"
            className="card-img-top"
            alt="Product 6"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleAd({
                  id: 20,
                  name: "Product 6",
                  price: 3500,
                  image:
                    "https://plus.unsplash.com/premium_photo-1671576642314-11a11284ea36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRyZXNzZXN8ZW58MHx8MHx8fDA%3D",
                })
              }
            >
              Add to Cart
            </button>

      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
          </div>
        </div>
</div>
      </div>
    </>
  );
};

export default Product2;