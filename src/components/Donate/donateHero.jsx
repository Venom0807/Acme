import React from 'react'

function DonateHero() {
  return (
    <section
      className="text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(34, 34, 34, 0.56), #222), url('/donate-bg.jpg')",
        backgroundSize: "auto,cover",
        backgroundPosition: "0px 0px, 50% 25%",
      }}
    >
      {/* fixed-width container, hero height scales by breakpoint */}
      <div className="heroCon mainWidth min-h-[60vh] flex items-center py-12 justify-center text-center">
        <div>
          {/* fluid responsive heading + sane line-height + balanced wrapping */}
          <h1 className="!font-extrabold leading-tight !text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            Here at Acme Outdoors
          </h1>
          <h3>every dollar counts</h3>
          {/* paragraph scales gently; use character-based max width instead of 30% */}
          <p className="mt-3 text-[clamp(14px,2.2vw,15spx)] md:w-[60%] text-center mx-auto">
            Acme Outdoors is more than just a company, we're a community of people who care for one another and for our city. During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DonateHero