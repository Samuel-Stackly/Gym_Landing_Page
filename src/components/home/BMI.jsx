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
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bmiImage})`,
      }}
    >
      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] justify-end px-8">

        {/* BMI Card */}

        <div className="w-full max-w-[540px] bg-white shadow-2xl">

          {/* Content */}

          <div className="px-12 pt-14">

            <h2 className="hero-title text-center text-[64px] uppercase leading-none text-[#ff2a1f]">
              Calculate Your
            </h2>

            <p className="nav-font mt-4 text-center text-xl uppercase text-gray-600">
              Body Mass Index
            </p>

            <div className="mt-16 space-y-10">

              {bmiFields.map((field) => (

                <div key={field.id}>

                  <div className="flex items-center justify-between">

                    <label className="nav-font text-xl font-semibold text-gray-400">
                      {field.label}
                    </label>

                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-24 bg-transparent text-right text-xl font-semibold text-black outline-none placeholder:text-black"
                    />

                  </div>

                  <div className="mt-4 h-px bg-gray-300"></div>

                </div>

              ))}

              {/* Gender */}

              <div>

                <div className="flex items-center justify-between">

                  <label className="nav-font text-xl font-semibold text-gray-400">
                    GENDER
                  </label>

                  <ChevronDown
                    size={24}
                    className="cursor-pointer"
                  />

                </div>

                <div className="mt-4 h-px bg-gray-300"></div>

              </div>

            </div>

          </div>

          {/* Footer Button */}

          <button className="mt-14 flex h-24 w-full items-center justify-center gap-4 bg-[#ff2a1f] hero-title text-3xl uppercase tracking-wide text-white transition hover:bg-red-700">

            Calculate BMI

            <ArrowRight size={24} />

          </button>

        </div>

      </div>

    </section>
  );
}

export default BMI;