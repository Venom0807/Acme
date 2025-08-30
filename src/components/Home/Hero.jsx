import React from 'react'

function Hero() {
  return (
    <section
      className="text-white"
      style={{
        backgroundImage:
          "linear-gradient(360deg, #222, rgba(34,34,34,0)), url('/heroBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* fixed-width container, hero height scales by breakpoint */}
      <div className="heroCon mainWidth min-h-[60vh] flex items-center py-12">
        <div>
          {/* fluid responsive heading + sane line-height + balanced wrapping */}
          <h1 className="font-bold leading-tight !text-6xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[20ch]">
            Serving you <br /> since 1989.
          </h1>

          {/* paragraph scales gently; use character-based max width instead of 30% */}
          <p className="mt-3 text-[clamp(14px,2.2vw,20px)] max-w-[39ch]">
            Acme Outdoors is an outdoor and adventure shop located in the
            Boathouse District in Oklahoma City.
          </p>

          {/* button stays compact and readable */}
          <button className="mt-3 border py-2 px-5 rounded w-fit hover:bg-white hover:text-black font-semibold transition-all duration-[0.3s]">
            Shop Merch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
