import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/Logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navClass =
    "text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500";

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:h-24 sm:px-6 lg:h-28 lg:px-8 xl:px-12">

        {/* Logo */}

        <NavLink to="/" className="shrink-0">
          <img
            src={logo}
            alt="Beast Gym"
            className="w-[120px] sm:w-[150px] lg:w-[170px]"
          />
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/facilities" className={navClass}>
            Facilities
          </NavLink>

          <NavLink to="/bmi" className={navClass}>
            BMI
          </NavLink>

          <NavLink to="/schedule" className={navClass}>
            Schedule
          </NavLink>

          <NavLink to="/reviews" className={navClass}>
            Reviews
          </NavLink>

          <NavLink to="/coaches" className={navClass}>
            Coaches
          </NavLink>

          <NavLink to="/blog" className={navClass}>
            Blog
          </NavLink>

          <NavLink to="/gallery" className={navClass}>
            Gallery
          </NavLink>

        </nav>

        {/* Desktop Button */}

        <button className="hidden h-14 w-40 bg-[#ff1e1e] text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700 lg:block">
          Join Now
        </button>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(true)}
          className="text-white lg:hidden"
        >
          <Menu size={30} />
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[100] bg-[#111] transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Header */}

        <div className="flex h-20 items-center justify-between border-b border-gray-700 px-5">

          <img
            src={logo}
            alt="Logo"
            className="w-[140px]"
          />

          <button
            onClick={closeMenu}
            className="text-white"
          >
            <X size={30} />
          </button>

        </div>

        {/* Navigation */}

        <nav className="mt-10 flex flex-col items-center gap-7">

          <NavLink
            to="/about"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            About
          </NavLink>

          <NavLink
            to="/facilities"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            Facilities
          </NavLink>

          <NavLink
            to="/bmi"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            BMI
          </NavLink>

          <NavLink
            to="/schedule"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            Schedule
          </NavLink>

          <NavLink
            to="/reviews"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            Reviews
          </NavLink>

          <NavLink
            to="/coaches"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            Coaches
          </NavLink>

          <NavLink
            to="/blog"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            Blog
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className="text-lg font-semibold uppercase text-white"
          >
            Gallery
          </NavLink>

          <button className="mt-6 h-14 w-52 bg-[#ff1e1e] text-sm font-bold uppercase text-white transition hover:bg-red-700">
            Join Now
          </button>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;