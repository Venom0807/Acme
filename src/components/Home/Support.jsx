import React from 'react'

const cards = [
  { num: '01', title: ['SHOP','PRODUCTS'], blurb: 'Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!', shape: '/Circle.svg', shapeClass: 'absolute -bottom-13 -right-15 w-30 h-30' },
  { num: '02', title: ['DONATE'], blurb: 'Since we\'ve changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.', shape: '/Triangle.svg', shapeClass: 'absolute -bottom-10 -right-8 w-30 h-30' },
  { num: '03', title: ['BUY','GIFT CARDS'], blurb: 'Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.', shape: '/Rectangle.svg', shapeClass: 'absolute -bottom-10 -right-8 w-30 h-30' },
]

function Support() {
  return (
    <section className="py-16">
      <div className="mainWidth">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="uppercase tracking-widest text-xs text-gray-500">WAYS TO SUPPORT</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-1">Support Acme Outdoors.</h1>
          </div>
          <p className="text-gray-600 leading-relaxed">
            COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever.
            Below, we’ve listed the best ways to help us through this season.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(c => (
            <div key={c.num} className="flex flex-col gap-4">
              <div className="relative bg-neutral-900 text-white rounded-md h-64 md:h-80 px-8 py-8 overflow-hidden">
                <span className="text-3xl font-bold tracking-wider opacity-90">{c.num}</span>
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <h3 className="font-extrabold tracking-wide leading-tight text-2xl md:text-3xl lg:text-4xl">
                    {c.title.map((t,i)=><span key={i} className="block">{t}</span>)}
                  </h3>
                </div>
                <img src={c.shape} alt="" className={`${c.shapeClass} pointer-events-none`} />
              </div>
              <p className="text-gray-700 leading-relaxed">{c.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Support
