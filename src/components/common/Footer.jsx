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

    // Newsletter API later
  };

  return (
    <footer className="bg-[#141414] text-white">

      {/* Top */}

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-12 px-8 py-16 lg:flex-row">

        {/* Logo */}

        <img
          src={logo}
          alt="Beast"
          className="h-14"
        />

        {/* Newsletter */}

        <div className="flex flex-col items-center gap-8 lg:flex-row">

          <h3 className="nav-font text-xl uppercase">
            Subscribe To Our Newsletter
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex h-20 w-[420px] items-center justify-between bg-[#23282c] px-8"
          >

            <input
              type="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-lg uppercase outline-none placeholder:text-white"
            />

            <button type="submit">

              <ArrowRight size={24} />

            </button>

          </form>

        </div>

      </div>

      {/* Divider */}

      <div className="mx-auto h-px max-w-[1400px] bg-[#2a2a2a]" />

      {/* Bottom */}

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-8 py-10 lg:flex-row">

        {/* Copyright */}

        <p className="text-lg text-gray-300">
          © Beast 2019 All Rights reserved.
        </p>

        {/* Links */}

        <div className="flex items-center gap-8">

          <button className="uppercase hover:text-[#ff2a1f] transition">
            Terms & Conditions
          </button>

          <div className="h-6 w-px bg-gray-500"></div>

          <button className="uppercase hover:text-[#ff2a1f] transition">
            Privacy Policy
          </button>

        </div>

        {/* Social */}

        <div className="flex gap-6">

          <a href="#">
            <img
              src={facebook}
              alt="Facebook"
              className="h-10 w-10 transition hover:scale-110"
            />
          </a>

          <a href="#">
            <img
              src={twitter}
              alt="Twitter"
              className="h-10 w-10 transition hover:scale-110"
            />
          </a>

          <a href="#">
            <img
              src={instagram}
              alt="Instagram"
              className="h-10 w-10 transition hover:scale-110"
            />
          </a>

          <a href="#">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-10 w-10 transition hover:scale-110"
            />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;