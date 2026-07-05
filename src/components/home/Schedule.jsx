import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import sunday from "../../assets/images/sunday.png";
import monday from "../../assets/images/monday.png";
import tuesday from "../../assets/images/tuesday.png";
import wednesday from "../../assets/images/wednesday.png";
import thursday from "../../assets/images/thursday.png";
import friday from "../../assets/images/friday.png";
import saturday from "../../assets/images/saturday.png";

const schedules = [
  {
    id: 1,
    day: "SUNDAY, 25TH NOV",
    category: "CARDIO",
    workout: "WEIGHT TRAINING",
    image: sunday,
  },
  {
    id: 2,
    day: "MONDAY, 25TH NOV",
    category: "CARDIO",
    workout: "WEIGHT TRAINING",
    image: monday,
  },
  {
    id: 3,
    day: "TUESDAY, 25TH NOV",
    category: "CARDIO",
    workout: "PLYO",
    image: tuesday,
  },
  {
    id: 4,
    day: "WEDNESDAY, 27TH NOV",
    category: "CARDIO",
    workout: "CROSSFIT",
    image: wednesday,
  },
  {
    id: 5,
    day: "THURSDAY, 28TH NOV",
    category: "BODY BUILDING",
    workout: "PLYO",
    image: thursday,
  },
  {
    id: 6,
    day: "FRIDAY, 29TH NOV",
    category: "PLYO",
    workout: "BODY BUILDING",
    image: friday,
  },
  {
    id: 7,
    day: "SATURDAY, 30TH NOV",
    category: "WEIGHT TRAINING",
    workout: "CROSSFIT",
    image: saturday,
  },
];

function Schedule() {
  return (
    <section
      id="schedule"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Schedule
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-[#444]">
            Keep Up With The Schedule To Stay Fit
          </h3>

          <p className="mt-8 text-lg leading-9 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

        </div>

        {/* Schedule Grid */}

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Navigation Card */}

          <div className="flex h-[360px] flex-col justify-between bg-[#ff2a1f] p-10 text-white">

            <div>

              <h3 className="hero-title text-right text-5xl leading-tight">
                24<sup className="text-xl">TH</sup>
                {" "}_
                {" "}30<sup className="text-xl">TH</sup>
              </h3>

              <p className="hero-title mt-6 text-right text-4xl uppercase">
                November 2019
              </p>

            </div>

            <div className="flex justify-end gap-6">

              <button className="transition hover:scale-110">
                <ArrowLeft size={28} />
              </button>

              <button className="transition hover:scale-110">
                <ArrowRight size={28} />
              </button>

            </div>

          </div>

          {/* Schedule Cards */}

          {schedules.map((item) => (
            <div
              key={item.id}
              className="group relative h-[360px] overflow-hidden cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.day}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/55"></div>

              {/* Content */}

              <div className="absolute inset-0 flex flex-col justify-between p-6">

                <h3 className="hero-title text-right text-4xl uppercase text-white">
                  {item.day}
                </h3>

                <div>

                  <h4 className="hero-title text-4xl uppercase text-white">
                    {item.category}
                  </h4>

                  <p className="nav-font mt-2 text-xl font-semibold uppercase text-white">
                    {item.workout}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Schedule;