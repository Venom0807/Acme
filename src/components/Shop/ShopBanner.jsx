import React from 'react'

function ShopBanner() {
  return (
    <div className=' flex flex-col justify-between  p-4 rounded-lg bg-[linear-gradient(180deg,rgba(34,34,34,0.22),rgba(34,34,34,0.69)),url("/bg1.jpg")] bg-cover bg-center text-white h-[30vh] mainWidth !mt-10 !mb-10'>
    <div className="bannerBtn text-end">
        <button className='py-1 px-4 !rounded-[5px] bg-white text-black'>Featured Item</button>
    </div>
    <div className="bannerText">
        <h4>White Tent</h4> 
        <p>$ 200.00 USD</p>
    </div>                 
</div>
  )
}

export default ShopBanner