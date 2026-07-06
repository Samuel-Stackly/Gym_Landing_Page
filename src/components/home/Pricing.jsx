import { ArrowRight } from "lucide-react";

import basic from "../../assets/images/basic.svg";
import premium from "../../assets/images/premium.svg";
import advanced from "../../assets/images/advanced.svg";

const plans = [
  {
    id: 1,
    title: "BASIC",
    icon: basic,
    price: "$ 9.99 / MONTH",
    highlighted: true,
    features: [
      "PERSONAL TRAINER",
      "SERVICE LOCKER ROOMS",
      "FITNESS ASSESSMENT",
      "MORNING SLOT",
    ],
  },
  {
    id: 2,
    title: "PREMIUM",
    icon: premium,
    price: "$ 24.99 / MONTH",
    highlighted: false,
    features: [
      "PERSONAL TRAINER",
      "SERVICE LOCKER ROOMS",
      "FITNESS ASSESSMENT / CONSULTATION",
      "MORNING & EVENING SLOT",
    ],
  },
  {
    id: 3,
    title: "ADVANCED",
    icon: advanced,
    price: "$ 14.99 / MONTH",
    highlighted: false,
    features: [
      "PERSONAL TRAINER",
      "SERVICE LOCKER ROOMS",
      "FITNESS ASSESSMENT",
      "MORNING SLOT",
    ],
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-4xl uppercase text-[#ff2a1f] sm:text-5xl lg:text-6xl">
            Join Now
          </h2>

          <h3 className="nav-font mt-3 text-xl uppercase text-[#444] sm:text-2xl">
            Join & Be One Of Us
          </h3>

        </div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 xl:mt-20 xl:grid-cols-3 xl:gap-0">

          {plans.map((plan) => (

            <div
              key={plan.id}
              className="flex min-h-[560px] flex-col border border-gray-300 bg-white xl:min-h-[620px]"
            >

              {/* Content */}

              <div className="flex flex-1 flex-col items-center px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

                <h3 className="hero-title text-4xl uppercase text-[#ff2a1f] sm:text-5xl">
                  {plan.title}
                </h3>

                <img
                  src={plan.icon}
                  alt={plan.title}
                  className="my-8 h-14 w-auto sm:my-10 sm:h-16"
                />

                <div className="space-y-4 text-center">

                  {plan.features.map((feature) => (

                    <p
                      key={feature}
                      className="nav-font text-base uppercase text-[#333] sm:text-lg lg:text-xl"
                    >
                      {feature}
                    </p>

                  ))}

                </div>

                <div className="mt-auto pt-10">

                  <h4 className="hero-title text-center text-3xl uppercase text-[#ff2a1f] sm:text-4xl lg:text-5xl">
                    {plan.price}
                  </h4>

                </div>

              </div>

              {/* Button */}

              {plan.highlighted ? (

                <button className="flex h-16 w-full items-center justify-center gap-3 bg-[#ff2a1f] hero-title text-xl uppercase text-white transition hover:bg-red-700 sm:h-18 sm:text-2xl lg:h-20 lg:text-3xl">

                  Enroll Now

                  <ArrowRight size={22} />

                </button>

              ) : (

                <div className="h-16 sm:h-18 lg:h-20"></div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;