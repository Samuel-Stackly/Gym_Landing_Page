import cardio from "../../assets/images/cardio.png";
import exercise from "../../assets/images/exercise.png";
import weight from "../../assets/images/weight.png";
import functional from "../../assets/images/functional.png";

const facilities = [
  {
    id: 1,
    title: "CARDIO ZONE",
    image: cardio,
  },
  {
    id: 2,
    title: "EXERCISE STUDIO",
    image: exercise,
  },
  {
    id: 3,
    title: "WEIGHT TRAINING",
    image: weight,
  },
  {
    id: 4,
    title: "FUNCTIONAL ZONE",
    image: functional,
  },
];

function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Facilities
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-[#444]">
            How It Feels To Be With Us
          </h3>

          <p className="mt-8 text-lg leading-9 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse laborum.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

          {facilities.map((facility) => (

            <div
              key={facility.id}
              className="group relative cursor-pointer overflow-hidden"
            >

              <img
                src={facility.image}
                alt={facility.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition duration-500"></div>

              {/* Title */}

              <h3 className="hero-title absolute bottom-6 left-6 text-5xl uppercase text-white">
                {facility.title}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;