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
          

           <NavLink
            to="/about"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            About
          </NavLink>

          <NavLink
            to="/facilities"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Facilities
          </NavLink>

          <NavLink
            to="/bmi"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            BMI
          </NavLink>

          <NavLink
            to="/schedule"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Schedule
          </NavLink>

          <NavLink
            to="/reviews"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Reviews
          </NavLink>

          <NavLink
            to="/coaches"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Coaches
          </NavLink>

          <NavLink
            to="/blog"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Blog
          </NavLink>

          <NavLink
            to="/gallery"
            className="text-[15px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-red-500"
          >
            Gallery
          </NavLink>

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