import React from 'react'
const cards = [
  {
    title: "White Tent",
    price: 200.00,
    image: "/bg1.jpg"
  },
  {
    title: "Tin Coffee Tumbler",
    price: 35.00,
    image: "/bg2.jpg"
  },
  {
    title: "Blue Cavas Pack",
    price: 95.00,
    image: "/bg3.jpg"
  },
]
function Products() {
  return (
    <div className='h-max py-20 mainWidth flex flex-col justify-center gap-10'>
        <div className="productsCon">
            <p className='text-xl'>Shop Products</p>
            <h1 className='!font-bold'>Open 24/7/365.</h1>
        </div>
        <div className="productCards flex justify-between flex-wrap">
            {cards.map((mereProducts)=>(
                <div className="productCard text-center flex flex-col items-center gap-6 mb-4" key={mereProducts.title}>
                    <div className='pImage rounded-lg h-[50vh] w-[350px]'style={{
                backgroundImage: `url('${mereProducts.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
              <div>

                    <h4 className='!font-semi bold'>{mereProducts.title}</h4>
                    <p className='font-semibold'>${mereProducts.price} USD</p>
                    <button className="bg-[#eb5757] text-white py-2 px-4 rounded w-fit font-semibold
                   transition-colors duration-300
                   hover:!bg-black hover:!text-white !text-lg">Details</button>
                   </div>
                </div>
            ))}
    </div>
    <div className='text-center'>
    <button className=" bg-black text-white py-2 px-4 rounded w-fit font-semibold transition-colors duration-300 hover:!bg-[#eb5757] hover:!text-white !text-lg">View All Products</button>
    </div>
    </div>
  )
}

export default Products