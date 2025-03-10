import React, { useState } from 'react';

const UseFormStatus = () => {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true); 
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit");
    setPending(false); 
  };

  const CustomerForm = () => {
    return (
      <div>
        <input className='border m-3' type="text" placeholder='Enter name' />
        <br />
        <input className='border m-3' type="password" placeholder='Enter password' />
        <br />
        <button type="submit" disabled={pending} className='bg-gray-300 p-3 m-3 cursor-pointer'>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>UseFormStatus Hook</h1>
      <form onSubmit={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
};

export default UseFormStatus;
