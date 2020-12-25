import React, { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../utils/useClickOutside';

function Select(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tokens, setTokens] = useState(props.tokens);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsVisible(false));

  useEffect(() => {
    if (!searchTerm.trim()) {
      setTokens(props.tokens);
    } else {
      let filteredTokens = tokens.filter(
        (token) =>
          token.symbol
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          token.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      setTokens(filteredTokens);
    }
  }, [searchTerm]);

  useEffect(() => {
    setTokens(props.tokens);
  }, [props.tokens]);

  return (
    <div className='space-y-1 w-1/3'>
      <span className='inline-block w-full rounded-md shadow-sm'>
        <button
          type='button'
          aria-haspopup='listbox'
          aria-expanded='true'
          aria-labelledby='listbox-label'
          onClick={() => setIsVisible((s) => !s)}
          className='cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5'
        >
          <span className='w-full inline-flex space-x-2 truncate'>
            <span className='truncate'>
              {props.activeToken.symbol}
            </span>
          </span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <svg
              className='h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='none'
              stroke='currentColor'
            >
              <path
                d='M7 7l3-3 3 3m0 6l-3 3-3-3'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </span>
        </button>
      </span>

      {isVisible && (
        <div className='absolute z-30 mt-1 w-full rounded-md shadow-lg bg-gray-700 text-white'>
          <ul
            ref={ref}
            tabindex='-1'
            role='listbox'
            aria-labelledby='listbox-label'
            aria-activedescendant='listbox-item-3 '
            className='m-4 max-h-80 rounded-md p-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5'
          >
            <div>
              <label for='tokens' className='sr-only'>
                Tokens Search
              </label>
              <div className='relative rounded-md shadow-sm'>
                <div class='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none rounded-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </div>
                <input
                  value={searchTerm}
                  onChange={({ target: { value } }) =>
                    setSearchTerm(value)
                  }
                  id='tokens'
                  autoFocus
                  className='focus:outline-none focus:ring focus:border-blue-200 pl-10 form-input block w-full sm:text-sm sm:leading-5 py-3 px-3 bg-gray-800 rounded-lg'
                  placeholder='Try DAI'
                />
              </div>
            </div>
            {tokens &&
              tokens.map((token) => {
                return (
                  <li
                    key={token.symbol}
                    id='listbox-item-0'
                    role='option'
                    className='select-none relative flex justify-between items-center hover:bg-gray-800 my-3 py-2 rounded-lg px-2 cursor-pointer'
                    onClick={() => {
                      props.updateSelected(token);
                      setIsVisible(false);
                    }}
                  >
                    <div className='flex space-x-2 items-center'>
                      <img
                        src={token.logoURI}
                        className='w-10 h-10 rounded-full'
                        alt=''
                      />
                      <span className='font-bold truncate'>
                        {token.symbol}
                      </span>
                    </div>
                    <span className='truncate text-sm'>
                      {token.name}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
