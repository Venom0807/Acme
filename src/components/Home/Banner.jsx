import React from 'react'

function Banner() {
  return (
    <div className='banner h-[50vh] text-white'style={{
        backgroundImage:
        "linear-gradient(180deg, #222, rgba(34,34,34,0.17)), url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="bannerCon mainWidth flex flex-col justify-center items-end h-full gap-6 text-right text-xl">

        <h1 className='w-[20ch]'>How we're keeping you safe during COVID-19</h1>
        <p className='w-[40ch]'>As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.</p>
        <button className="bg-white text-black py-2 px-4 rounded w-fit font-semibold
                   transition-colors duration-300
                   hover:!bg-[#eb5757] hover:!text-white !text-lg">
  Read Our Statement
</button>
        </div>
    </div>
  )
}

export default Banner