import React from 'react';

function Excahnge(props) {
  return (
    <button
      onClick={props.handleClick}
      className='text-center text-white flex justify-center w-full my-4'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='change'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        className='fill-current'
      >
        <path
          d='M10 14V1M10 1L5 6M10 1L15 6'
          stroke='currentColor'
          stroke-width='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14 10V23M14 23L9 18M14 23L19 18'
          stroke='currentColor'
          stroke-width='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}

export default Excahnge;
