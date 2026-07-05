import coachBg from "../../assets/images/coach-bg.svg";
import coachMain from "../../assets/images/coach-main.svg";

import facebook from "../../assets/images/fb.svg";
import twitter from "../../assets/images/x.svg";
import instagram from "../../assets/images/in.svg";
import linkedin from "../../assets/images/ln.svg";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${coachBg})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-8 pt-24">

        {/* Left */}

        <div className="w-full lg:w-1/2">

          <img
            src={coachMain}
            alt="Coach"
            className="w-full max-w-[520px] border-[5px] border-[#ff2a1f]"
          />

        </div>

        {/* Right */}

        <div className="w-full lg:w-1/2">

          <h1 className="hero-title text-8xl uppercase text-white">
            John Snow
          </h1>

          <p className="hero-title mt-8 text-3xl uppercase text-[#ff2a1f]">
            Body Building Coach
          </p>

          <div className="mt-16 space-y-8">

            <div className="flex items-center gap-4 text-white text-2xl">
              <span className="text-gray-300 uppercase">Age:</span>

              <span>29</span>
            </div>

            <div className="flex items-center gap-4 text-white text-2xl">
              <span className="text-gray-300 uppercase">
                Experience:
              </span>

              <span>5 Years</span>
            </div>

            <div className="flex items-center gap-4 text-white text-2xl">
              <span className="text-gray-300 uppercase">
                Phone:
              </span>

              <span>+1 9876543210</span>
            </div>

            <div className="flex items-center gap-4 text-white text-2xl">
              <span className="text-gray-300 uppercase">
                Email:
              </span>

              <span>john@beast.com</span>
            </div>

          </div>

          {/* Social */}

          <div className="mt-16 flex gap-8">

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

      </div>

    </section>
  );
}

export default Hero;