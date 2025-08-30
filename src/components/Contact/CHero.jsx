import React from 'react'
const cCard = [
    { title: 'Contact Us', text: "Just want to say hi? We'd love to hear from you. We love our customers and community!", button:"Send Us A Message", icon:"/contacti1.svg" },
    { title: 'Get Support', text: "Have an issue with an order or with a product you purchased from us? Fill out our support form.", button:"Contact Support", icon:"/contacti2.svg" },
]
function CHero() {
  return (
    <div className='bg-[#222222] text-white md:h-[60vh] flex flex-col relative cHero '>
        <div className="contactCards mainWidth z-1 flex flex-col justify-center gap-10 md:w-[55%] w-full">
            <h1>Contact Acme Outdoors</h1>
            <div className="cards flex  gap-4 flex-wrap">
                {cCard.map((mereCard) => (
                    <div className='bg-white text-black md:w-[30%] w-[100%] flex flex-col items-center p-5 rounded-lg gap-4 text-center'>
                    <div className="icon">
                        <img src={mereCard.icon} alt="" />
                    </div>    
                    <div className="cCard ">
                        <h2>{mereCard.title}</h2>
                        <p>{mereCard.text}</p>
                        <button className='bg-[#eb5757] text-white py-2 px-4 font-medium !rounded-lg hover:bg-black hover:text-white transition-all duration-[.3s]'>{mereCard.button}</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:absolute md:right-0 contactImg bg-[linear-gradient(90deg,#222,rgba(34,34,34,0.18)_76%),url('/contact.jpg')] bg-no-repeat bg-cover bg-center  h-[100%] md:w-[45%] w-[full]">
</div>
    </div>
  )
}

export default CHero