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
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="hero-title text-4xl uppercase text-[#ff2a1f] sm:text-5xl lg:text-6xl">
            Facilities
          </h2>

          <h3 className="nav-font mt-3 text-xl uppercase text-[#444] sm:text-2xl">
            How It Feels To Be With Us
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-500 sm:mt-8 sm:text-lg sm:leading-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse laborum.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">

          {facilities.map((facility) => (

            <div
              key={facility.id}
              className="group relative h-[320px] cursor-pointer overflow-hidden rounded-lg sm:h-[380px] xl:h-[430px]"
            >

              <img
                src={facility.image}
                alt={facility.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/45"></div>

              {/* Title */}

              <div className="absolute bottom-5 left-5 right-5">

                <h3 className="hero-title text-3xl uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                  {facility.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;