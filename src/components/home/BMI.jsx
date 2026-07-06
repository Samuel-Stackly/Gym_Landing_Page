import bmiImage from "../../assets/images/bmi.png";
import { ArrowRight, ChevronDown } from "lucide-react";

const bmiFields = [
  {
    id: 1,
    label: "HEIGHT",
    placeholder: "Cm",
    type: "text",
  },
  {
    id: 2,
    label: "WEIGHT",
    placeholder: "Kg",
    type: "text",
  },
  {
    id: 3,
    label: "AGE",
    placeholder: "Year",
    type: "text",
  },
];

function BMI() {
  return (
    <section
      id="bmi"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-28"
      style={{
        backgroundImage: `url(${bmiImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] justify-center px-4 sm:px-6 lg:justify-end lg:px-8">

        {/* Card */}

        <div className="w-full max-w-[560px] bg-white shadow-2xl">

          <div className="px-6 pt-8 sm:px-10 sm:pt-10 lg:px-12 lg:pt-14">

            <h2 className="hero-title text-center text-4xl uppercase leading-none text-[#ff2a1f] sm:text-5xl lg:text-[64px]">
              Calculate Your
            </h2>

            <p className="nav-font mt-3 text-center text-lg uppercase text-gray-600 sm:text-xl">
              Body Mass Index
            </p>

            <div className="mt-10 space-y-8 sm:mt-12 lg:mt-16 lg:space-y-10">

              {bmiFields.map((field) => (
                <div key={field.id}>

                  <div className="flex items-center justify-between">

                    <label className="nav-font text-base font-semibold text-gray-400 sm:text-lg lg:text-xl">
                      {field.label}
                    </label>

                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-20 bg-transparent text-right text-base font-semibold text-black outline-none placeholder:text-black sm:w-24 sm:text-lg lg:text-xl"
                    />

                  </div>

                  <div className="mt-4 h-px bg-gray-300"></div>

                </div>
              ))}

              {/* Gender */}

              <div>

                <div className="flex items-center justify-between">

                  <label className="nav-font text-base font-semibold text-gray-400 sm:text-lg lg:text-xl">
                    GENDER
                  </label>

                  <ChevronDown
                    size={22}
                    className="cursor-pointer sm:size-6"
                  />

                </div>

                <div className="mt-4 h-px bg-gray-300"></div>

              </div>

            </div>

          </div>

          {/* Button */}

          <button className="mt-10 flex h-16 w-full items-center justify-center gap-3 bg-[#ff2a1f] hero-title text-xl uppercase tracking-wide text-white transition hover:bg-red-700 sm:mt-12 sm:h-20 sm:text-2xl lg:mt-14 lg:h-24 lg:text-3xl">

            Calculate BMI

            <ArrowRight size={22} className="sm:size-6" />

          </button>

        </div>

      </div>
    </section>
  );
}

export default BMI;