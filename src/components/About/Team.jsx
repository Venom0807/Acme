import React from 'react'

function Team() {
  return (
    <section className="py-16">
      <div className="mainWidth">
        {/* Single relative wrapper so image sits ON TOP of the card */}
        <div className="relative">
          {/* The dark card */}
          <div className="darkcard rounded-lg bg-[#222222] text-white p-6 md:p-12 md:pl-[550px] h-[80vh]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Meet the Owners</h2>

            <div className="space-y-5 text-shadow-white leading-relaxed max-w-[55ch] font-medium">
              <p>
                John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal.
              </p>
              <p>
                While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors.
              </p>
              <p>
                Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions.
              </p>
              <p>While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow!</p>
              <p>In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.</p>
              <p>To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.</p>
            </div>
          </div>

          {/* The overlapping image (same container, above the card) */}
          <div className="
              absolute top-8 -left-8 z-10
              w-[526.5px] h-[666px] object-cover rounded-lg shadow-lg
              hidden md:block
            " style={{
                backgroundImage: `url('busiImg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "50% 100%",}}>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team