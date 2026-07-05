import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-28 max-w-[1400px] items-center justify-between px-8 xl:px-12">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <img
            src={logo}
            alt="Beast Gym"
            className="w-[170px] object-contain"
          />
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#about"
            className="text-[15px] font-semibold uppercase tracking-wide text-red-500 transition-colors duration-300"
          >
            About Us
          </a>

          <a
            href="#facilities"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Facilities
          </a>

          <a
            href="#bmi"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            BMI
          </a>

          <a
            href="#schedule"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Schedule
          </a>

          <a
            href="#reviews"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Reviews
          </a>

          <NavLink
            to="/coaches"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Coaches
          </NavLink>

          <a
            href="#blog"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Blog
          </a>

          <a
            href="#gallery"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Gallery
          </a>
        </nav>

        {/* Join Button */}
        <button className="hidden h-16 w-44 bg-[#ff1e1e] text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 lg:block">
          Join Now
        </button>
      </div>
    </header>
  );
}

export default Navbar;