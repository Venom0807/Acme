import React from 'react'

function AContact() {
  return (
    <div className="relative h-[50vh] bg-[url('/hello.jpg')] bg-cover bg-center flex flex-col justify-center ">
  <div className="absolute inset-0 bg-gradient-to-t from-[#222222] to-[#22222200]"></div>
  <div className="text-white mainWidth z-1 flex flex-col gap-3 items-start">
  <h1 className='!text-6xl font-extrabold'>Need Help?</h1>
  <p className=' text-xl'>Need help or assistance? Our team is standing by to make sure you get the help you need. Whether you need to adjust an order or delivery details, we're ready to help!</p>
  <button className='bg-transparent text-[#f9f9f9] px-[25px] py-[5px] border-1 border-[#f9f9f9] font-bold !rounded-[5px] hover:!bg-white hover:text-black transition-all duration-[0.3s]'>Contact Support</button>
  </div>
</div>
  )
}

export default AContact