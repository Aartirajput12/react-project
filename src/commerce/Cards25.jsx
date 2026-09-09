import React from "react";
import { NavLink } from "react-router-dom";

const Cards25 = ({ cartItems, setCartItems }) => {

  const handleAddToCart = (product) => {
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
      <h3
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        New Arrivals
      </h3>

      {/* FIRST ROW */}
      <div
        className="gp1"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >

        {/* PRODUCT 1 */}
        <div className="card" style={{ width: "25rem" }}>
          <img src="https://images.unsplash.com/photo-1727535726705-b2aa71327c1c?w=900&auto=format&fit=crop&q=60" className="card-img-top"alt="Product 1"style={{height: "400px",objectFit: "cover",}}/>
 <div className="card-body">
<h5 className="card-title">
<img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"style={{ height: "20px" }}alt="rupee"/>2,000 </h5>
<button className="btn btn-primary"onClick={() =>handleAddToCart({ id: 1,price: 2000,image: "https://images.unsplash.com/photo-1727535726705-b2aa71327c1c?w=900&auto=format&fit=crop&q=60", })}>
              Add to Cart
            </button>

<NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
          </div>
        </div>


        {/* PRODUCT 2 */}
<div className="card" style={{ width: "25rem" }}>
<img src="https://images.unsplash.com/photo-1768803968271-06b01687c53b?w=900&auto=format&fit=crop&q=60"className="card-img-top"alt="Product 2"style={{ height: "400px",objectFit: "cover",}} />

          <div className="card-body">
            <h5 className="card-title">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
                style={{ height: "20px" }}
                alt="rupee"
              />
              4,000
            </h5>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleAddToCart({
                  id: 2,
                  price: 4000,
                  image:
                    "https://images.unsplash.com/photo-1768803968271-06b01687c53b?w=900&auto=format&fit=crop&q=60",
                })
              }
            >
              Add to Cart
            </button>
            <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink> </div>
        </div>


        {/* PRODUCT 3 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1745482039058-92017fb981cf?w=900&auto=format&fit=crop&q=60"
            className="card-img-top"
            alt="Product 3"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
                style={{ height: "20px" }}
                alt="rupee"
              />
              10,000
            </h5>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleAddToCart({
                  id: 3,
                  price: 10000,
                  image:
                    "https://images.unsplash.com/photo-1745482039058-92017fb981cf?w=900&auto=format&fit=crop&q=60",
                })
              }
            >
              Add to Cart
            </button>

 <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
 </div></div>

        {/* PRODUCT 4 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1765229277675-b8466891e689?w=900&auto=format&fit=crop&q=60"
            className="card-img-top"
            alt="Product 4"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
                style={{ height: "20px" }}
                alt="rupee"
              />
              15,000
            </h5>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleAddToCart({
                  id: 4,
                  price: 15000,
                  image:
                    "https://images.unsplash.com/photo-1765229277675-b8466891e689?w=900&auto=format&fit=crop&q=60",
                })
              }
            >
              Add to Cart
            </button>

            
 <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
</div>
        </div>

      </div>


      {/* SECOND ROW */}
      <div
        className="grp9"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >

        {/* PRODUCT 5 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1756699066165-dfa46a13288d?w=900&auto=format&fit=crop&q=60"
            className="card-img-top"
            alt="Product 5"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
                style={{ height: "20px" }}
                alt="rupee"
              />
              6,000
            </h5>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleAddToCart({
                  id: 5,
                  price: 6000,
                  image:
                    "https://images.unsplash.com/photo-1756699066165-dfa46a13288d?w=900&auto=format&fit=crop&q=60",
                })
              }
            >
              Add to Cart
            </button>

<NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
          </div>
        </div>


        {/* PRODUCT 6 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1721182420935-29bfb69dd26c?w=900&auto=format&fit=crop&q=60"
            className="card-img-top"
            alt="Product 6"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
                style={{ height: "20px" }}
                alt="rupee"
              />
              5,000
            </h5>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleAddToCart({
                  id: 6,
                  price: 5000,
                  image:
                    "https://images.unsplash.com/photo-1721182420935-29bfb69dd26c?w=900&auto=format&fit=crop&q=60",
                })
              }
            >
              Add to Cart
            </button>

            <NavLink to="/Form"><button
              className="btn btn-primary"
              style={{ marginLeft: "10px" }}
            >
              Buy Now
            </button></NavLink>
          </div>
        </div>


        {/* PRODUCT 7 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1786053804264-afe55c3ffe47?w=900&auto=format&fit=crop&q=60"
            className="card-img-top"
            alt="Product 7"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
                style={{ height: "20px" }}
                alt="rupee"
              />
              4,000
            </h5>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleAddToCart({
                  id: 7,
                  price: 4000,
                  image:
                    "https://images.unsplash.com/photo-1786053804264-afe55c3ffe47?w=900&auto=format&fit=crop&q=60",
                })
              }
            >
              Add to Cart
            </button>

            <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
          </div>
        </div>


        {/* PRODUCT 8 */}
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=900&auto=format&fit=crop&q=60"
            className="card-img-top"
            alt="Product 8"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
                style={{ height: "20px" }}
                alt="rupee"
              />
              5,000
            </h5>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleAddToCart({
                  id: 8,
                  price: 5000,
                  image:
                    "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=900&auto=format&fit=crop&q=60",
                })
              }
            >
              Add to Cart
            </button>

            <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
          </div>
        </div>

      </div>
    </>
  );
};

export default Cards25;



