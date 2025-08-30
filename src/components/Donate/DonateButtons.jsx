import React from 'react'

const donateOptions = [
    { amount: 'Donate $100' },
    { amount: 'Donate $50' },
    { amount: 'Donate $25' },
    { amount: 'Donate $15' },
    { amount: 'Donate $5' },
];

function DonateButtons() {
  return (
    <div className='py-10 mainWidth flex justify-center items-center'>
      <div className="rounded-lg donateContainer border-2 flex flex-col items-center w-[100%] md:w-[55%] p-10">
        
        {/* Yahan flex-col + gap */}
        <div className="donateCon w-full flex flex-col gap-4">
          {donateOptions.map((option, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#eb5757] text-white donateButton  py-3 text-center w-full hover:bg-black hover:text-white cursor-pointer transition-all duration-[.3s]"
            >
                <h4>
              {option.amount}
                </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DonateButtons
