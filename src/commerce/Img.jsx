import React from 'react'

const Img = () => {
  return (
    <>
      <style>{`
        .fashion-img {
          margin-top: 20px;
          width: 100%;
          height: auto;
          max-width: 100%;
          display: block;
        }

        /* Mobile */
        @media (max-width: 576px) {
          .fashion-img {
            width: 100%;
            height: 250px;
            object-fit: contain;
          }
        }
      `}</style>

      <img
        src="https://images-static.nykaa.com/uploads/aa462a1e-cccc-4028-a12a-df50effabb3c.jpg?tr=cm-pad_resize,w-1800"
        className="fashion-img"
        alt="Women Fashion"
      />
    </>
  )
}

export default Img