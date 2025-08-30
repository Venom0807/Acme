import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { LuShoppingCart } from "react-icons/lu";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function MyNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/shop", label: "Shop" },
    { to: "/donate", label: "Donate" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <div className='navMain sticky top-0 z-50'>
      {/* Top Announcement Bar */}
      <div className="header bg-dark text-white py-3 d-flex justify-content-center align-items-center gap-3">
        <Button
          className="btn-custom rounded-pill px-4 py-2"
          style={{ backgroundColor: '#eb5757', borderColor: '#eb5757' }}
        >
          Announcement
        </Button>
        <p className="mb-0">How we're responding to COVID-19</p>
      </div>

      {/* Navigation Bar */}
      <div className="nav bg-[#eb5757] text-white">
        <div className="navCon flex mainWidth m-auto justify-between items-center py-4">
          {/* Logo */}
          <img src="5e7ff57adad44d1f072965b6_logo.svg" alt="Logo" className="h-8" />

          {/* Desktop Links */}
          <ul className="navLinks hidden md:flex gap-10 items-center list-none m-0 p-0">
            {links.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white !no-underline py-2 cursor-pointer px-3 rounded hover:bg-black transition-all duration-[.3s]"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Cart */}
            <li className="relative flex items-center">
              <span className="text-2xl py-2 px-3 rounded-sm bg-black">
                <LuShoppingCart />
              </span>
              <span className='flex items-center justify-center rounded-full w-5 h-5 absolute -top-2 left-11 bg-white text-black font-semibold text-xs'>
                0
              </span>
            </li>
          </ul>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-white/30 rounded"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-1 px-4 pb-4">
            {links.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block w-full text-white !no-underline px-3 py-2 rounded hover:bg-black/30 transition-colors"
                  onClick={closeMenu}
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Cart (mobile) */}
            <li className="relative">
              <button
                className="w-full flex items-center gap-3 px-3 py-2 rounded bg-black/20"
                onClick={closeMenu}
              >
                <LuShoppingCart className="text-2xl" />
                <span>Cart</span>
                <span className='ml-auto inline-flex items-center justify-center rounded-full w-5 h-5 bg-white text-black font-semibold text-xs'>
                  0
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyNav;
