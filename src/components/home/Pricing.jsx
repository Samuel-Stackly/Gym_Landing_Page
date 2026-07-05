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
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-8">
        {/* Heading */}

        <div className="text-center">
          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Join Now
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-[#444]">
            Join & Be One Of Us
          </h3>
        </div>

        {/* Pricing Cards */}

        <div className="mt-20 grid grid-cols-1 border border-gray-400 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex min-h-[620px] flex-col border-r border-gray-400 last:border-r-0"
            >
              {/* Card Content */}

              <div className="flex flex-1 flex-col items-center px-10 py-14">
                <h3 className="hero-title text-5xl uppercase text-[#ff2a1f]">
                  {plan.title}
                </h3>

                <img
                  src={plan.icon}
                  alt={plan.title}
                  className="my-12 h-16 w-auto"
                />

                <div className="space-y-3 text-center">
                  {plan.features.map((feature) => (
                    <p
                      key={feature}
                      className="nav-font text-xl uppercase text-[#333]"
                    >
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="mt-auto pt-12">
                  <h4 className="hero-title text-5xl uppercase text-[#ff2a1f] text-center">
                    {plan.price}
                  </h4>
                </div>
              </div>

              {/* Button only for Basic */}

              {plan.highlighted ? (
                <button className="flex h-20 w-full items-center justify-center gap-3 bg-[#ff2a1f] hero-title text-3xl uppercase text-white transition hover:bg-red-700">
                  Enroll Now
                  <ArrowRight size={22} />
                </button>
              ) : (
                <div className="h-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;