import { useState } from "react";
import { ArrowRight } from "lucide-react";

import logo from "../../assets/images/Logo.svg";

import facebook from "../../assets/images/fb.svg";
import twitter from "../../assets/images/x.svg";
import instagram from "../../assets/images/in.svg";
import linkedin from "../../assets/images/ln.svg";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <footer className="overflow-x-hidden bg-[#141414] text-white">

      {/* Top */}

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:px-8 lg:py-16">

        {/* Logo */}

        <img
          src={logo}
          alt="Beast"
          className="h-12 sm:h-14"
        />

        {/* Newsletter */}

        <div className="flex w-full flex-col items-center gap-6 lg:w-auto lg:flex-row">

          <h3 className="nav-font text-center text-lg uppercase sm:text-xl">
            Subscribe To Our Newsletter
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex h-16 w-full max-w-[420px] items-center justify-between bg-[#23282c] px-5 sm:h-20 sm:px-8"
          >

            <input
              type="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-sm uppercase outline-none placeholder:text-white sm:text-base lg:text-lg"
            />

            <button
              type="submit"
              className="ml-3 shrink-0"
            >
              <ArrowRight size={22} />
            </button>

          </form>

        </div>

      </div>

      {/* Divider */}

      <div className="mx-auto h-px max-w-[1400px] bg-[#2a2a2a]" />

      {/* Bottom */}

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-4 py-8 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">

        {/* Copyright */}

        <p className="text-base text-gray-300 lg:text-lg">
          © Beast 2019 All Rights Reserved.
        </p>

        {/* Links */}

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

          <button className="text-sm uppercase transition hover:text-[#ff2a1f] sm:text-base">
            Terms & Conditions
          </button>

          <div className="hidden h-5 w-px bg-gray-500 sm:block"></div>

          <button className="text-sm uppercase transition hover:text-[#ff2a1f] sm:text-base">
            Privacy Policy
          </button>

        </div>

        {/* Social */}

        <div className="flex items-center gap-5">

          <a href="#">
            <img
              src={facebook}
              alt="Facebook"
              className="h-8 w-8 transition hover:scale-110 sm:h-10 sm:w-10"
            />
          </a>

          <a href="#">
            <img
              src={twitter}
              alt="Twitter"
              className="h-8 w-8 transition hover:scale-110 sm:h-10 sm:w-10"
            />
          </a>

          <a href="#">
            <img
              src={instagram}
              alt="Instagram"
              className="h-8 w-8 transition hover:scale-110 sm:h-10 sm:w-10"
            />
          </a>

          <a href="#">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-8 w-8 transition hover:scale-110 sm:h-10 sm:w-10"
            />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;