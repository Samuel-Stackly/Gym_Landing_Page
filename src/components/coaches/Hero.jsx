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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center gap-12 px-4 pt-24 pb-16 sm:px-6 lg:flex-row lg:gap-20 lg:px-8">

        {/* Left */}

        <div className="flex w-full justify-center lg:w-1/2">

          <img
            src={coachMain}
            alt="Coach"
            className="w-full max-w-[300px] border-4 border-[#ff2a1f] sm:max-w-[420px] lg:max-w-[520px] lg:border-[5px]"
          />

        </div>

        {/* Right */}

        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <h1 className="hero-title text-5xl uppercase text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            John Snow
          </h1>

          <p className="hero-title mt-4 text-xl uppercase text-[#ff2a1f] sm:mt-6 sm:text-2xl lg:mt-8 lg:text-3xl">
            Body Building Coach
          </p>

          {/* Details */}

          <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6 lg:mt-16 lg:space-y-8">

            <div className="flex items-center justify-center gap-3 text-lg text-white sm:text-xl lg:justify-start lg:text-2xl">
              <span className="uppercase text-gray-300">Age:</span>
              <span>29</span>
            </div>

            <div className="flex items-center justify-center gap-3 text-lg text-white sm:text-xl lg:justify-start lg:text-2xl">
              <span className="uppercase text-gray-300">
                Experience:
              </span>
              <span>5 Years</span>
            </div>

            <div className="flex items-center justify-center gap-3 text-lg text-white sm:text-xl lg:justify-start lg:text-2xl">
              <span className="uppercase text-gray-300">
                Phone:
              </span>
              <span>+1 9876543210</span>
            </div>

            <div className="flex items-center justify-center gap-3 text-lg text-white sm:text-xl lg:justify-start lg:text-2xl break-all sm:break-normal">
              <span className="uppercase text-gray-300">
                Email:
              </span>
              <span>john@beast.com</span>
            </div>

          </div>

          {/* Social */}

          <div className="mt-10 flex justify-center gap-5 sm:gap-6 lg:mt-16 lg:justify-start lg:gap-8">

            <a href="#">
              <img
                src={facebook}
                alt="Facebook"
                className="h-8 w-8 transition hover:scale-110 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              />
            </a>

            <a href="#">
              <img
                src={twitter}
                alt="Twitter"
                className="h-8 w-8 transition hover:scale-110 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              />
            </a>

            <a href="#">
              <img
                src={instagram}
                alt="Instagram"
                className="h-8 w-8 transition hover:scale-110 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              />
            </a>

            <a href="#">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 w-8 transition hover:scale-110 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;