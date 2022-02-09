import React from 'react';
import quotes from '../../src/assets/data/quotes.json';

interface Props {
  quoteNum: number;
  marginTop: number;
  marginTopMobile?: number;
  marginBottom: number;
  marginBottomMobile?: number;
}

const Divider: React.FC<Props> = ({ quoteNum, marginTop, marginBottom }) => {
  const quote = quotes[quoteNum - 1];
  return (
    <div
      className={`mt-${marginTop} mb-${marginBottom} h-44  ms:mt-0 ms:h-16 flex flex-col items-center justify-center`}
    >
      <img
        src='/triangle.svg'
        className='w-52 absolute opacity-60'
        data-aos='fade-down'
        data-aos-duration='400'
        data-aos-mirror='true'
      />
      <div
        className='flex flex-col items-center -mt-4'
        data-aos='zoom-in'
        data-aos-duration='500'
        data-aos-delay='200'
        data-aos-mirror='true'
      >
        {/* <span className='text-6xl text-slate-500 font-mono -mr-4 -mt-6'>〞</span> */}

        <p className='text-2xl tracking-wide text-center text-slate-800 font-medium leading-tight'>
          {/* If I always did what I was qualified to do, <br /> I'd be pushing a broom somewhere */}
          {quote?.quoteLine1} <br /> {quote?.quoteLine2}
        </p>
        <p className='text-base text-slate-700  font-medium '>
          <span className=' font-bold  font-mono text-slate-800  tracking-tighter mr-1'>—</span>
          {/* Naval */}
          {quote?.author}
        </p>
        {/* <span className='text-6xl text-slate-500 font-mono -ml-1 -mb-9'>〟</span> */}
      </div>
    </div>
  );
};

export default Divider;
