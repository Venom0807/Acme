import React, { useState } from "react";

const cardInfo = [
  { title: "Gift Card",          price: "$ 25.00 USD",  image: "/shop2.jpg", category: "Gift Cards" },
  { title: "Tin Coffee Tumbler", price: "$ 35.00 USD",  image: "/bg2.jpg",   category: "Accessories" },
  { title: "Blue Canvas Pack",   price: "$ 95.00 USD",  image: "/bg3.jpg",   category: "Packs" },
  { title: "Green Canvas Pack",  price: "$ 125.00 USD", image: "/shop1.jpg", category: "Packs" },
];

const categories = ["All", "Gift Cards", "Tents", "Accessories", "Packs"];

function Shopping() {
  // ✅ Hook must be inside the component
  const [activeCat, setActiveCat] = useState("All");

  const products =
    activeCat === "All"
      ? cardInfo
      : cardInfo.filter((item) => item.category === activeCat);

  return (
    <div className="mainWidth mx-auto flex flex-col md:flex-row gap-8 ">
      {/* Sidebar */}
      <aside className="md:w-64 shrink-0">
        <h4 className="text-xl font-semibold">Shop by Category</h4>
        <div className="mt-6 flex flex-col gap-2">
          {categories.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveCat(t)}
              className={`w-full text-left border-1 !rounded-lg hover:bg-black hover:text-white py-2 px-3 font-medium transition"}
              `}
            >
              {t}
            </button>
          ))}
        </div>
      </aside>

      {/* Cards — flex-wrap + justify-between so last card hugs right edge */}
      <section className="flex-1">
        <div className="flex flex-wrap md:justify-between justify-center gap-y-12">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="
                mb-2
                w-[90%]
                sm:w-[calc(50%-12px)]
                lg:w-[calc(33.333%-16px)]
              "
            >
              <div className="rounded-lg overflow-hidden shadow-sm">
                <div className="w-full h-[360px] lg:h-[400px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h4 className="mt-4 text-xl font-semibold text-center">{item.title}</h4>
              <p className="text-center text-gray-700 font-semibold">{item.price}</p>

              <div className="mt-3 flex justify-center">
                <button className="px-4 py-2 !rounded-lg bg-[#eb5757] text-white font-semibold hover:bg-black transition-all duration-[.3s]">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Shopping;
