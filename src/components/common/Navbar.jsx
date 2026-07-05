import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Beast Gym"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#about" className="text-sm font-semibold uppercase text-red-500 transition">
            About Us
          </a>

          <a href="#facilities" className="text-sm font-semibold uppercase text-white hover:text-red-500 transition">
            Facilities
          </a>

          <a href="#bmi" className="text-sm font-semibold uppercase text-white hover:text-red-500 transition">
            BMI
          </a>

          <a href="#schedule" className="text-sm font-semibold uppercase text-white hover:text-red-500 transition">
            Schedule
          </a>

          <a href="#reviews" className="text-sm font-semibold uppercase text-white hover:text-red-500 transition">
            Reviews
          </a>

          <NavLink
            to="/coaches"
            className="text-sm font-semibold uppercase text-white hover:text-red-500 transition"
          >
            Coaches
          </NavLink>

          <a href="#blog" className="text-sm font-semibold uppercase text-white hover:text-red-500 transition">
            Blog
          </a>

          <a href="#gallery" className="text-sm font-semibold uppercase text-white hover:text-red-500 transition">
            Gallery
          </a>
        </nav>

        {/* Join Button */}
        <button className="hidden h-16 w-40 bg-red-600 text-sm font-bold uppercase text-white transition hover:bg-red-700 lg:block">
          Join Now
        </button>
      </div>
    </header>
  );
}

export default Navbar;