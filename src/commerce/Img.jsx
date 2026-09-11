
import React from 'react'

const Img = () => {
  return (
    <>
<style>{` .fashion-img { margin-top: 20px; width: 100%; height: 500px; object-fit: cover; display: block; } /* Mobile */ @media (max-width: 576px) { .fashion-img { height: 600px; } } /* Small mobile */ @media (max-width: 375px) { .fashion-img { height: 550px; } } `}</style>

      <img
        src="https://images-static.nykaa.com/uploads/aa462a1e-cccc-4028-a12a-df50effabb3c.jpg?tr=cm-pad_resize,w-1800"
  className="fashion-img"
        alt="Women Fashion"
      />
    </>
  )
}

export default Img

