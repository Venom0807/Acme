// src/components/Shop.jsx
import React from "react";

function Shop() {
  return (
    <section className="py-16">
      <div className="mainWidth">
        {/* Single relative wrapper so image sits ON TOP of the card */}
        <div className="relative">
          {/* The dark card */}
          <div className="rounded-lg bg-[#222222] text-white p-6 md:p-12 md:pl-[360px]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Shop Local.</h2>

            <div className="space-y-5 text-gray-300 leading-relaxed max-w-[65ch]">
              <p>
                We know that during COVID-19, a lot of folks around the city and state are
                feeling uneasy about the future – we’re not sure what the future holds either.
              </p>
              <p>
                That said: we know that we love making sure you have the gear you need for your
                adventures, and we’re going to keep doing that – with our team – until the city tells us we can’t.
              </p>
              <p>
                But as long as folks like yourself support small businesses around the city,
                then we’ll be here — every day, making sure your orders arrive on time.
              </p>

              <div className="pt-2">
                <div className="text-gray-400">-------</div>
                <p className="mt-4">Jane &amp; John Doe</p>
                <p className="font-semibold">Acme Outdoors</p>
              </div>
            </div>
          </div>

          {/* The overlapping image (same container, above the card) */}
          <div className="
              absolute top-8 -left-8 z-10
              w-[320px] h-[440px] object-cover rounded-lg shadow-lg
              hidden md:block
            " style={{
                backgroundImage: `url('local.jpg')`,
                backgroundSize: "270%",
                backgroundPosition: "69% 80%",}}>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
