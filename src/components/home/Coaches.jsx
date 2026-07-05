import coach1 from "../../assets/images/coach1.svg";
import coach2 from "../../assets/images/coach2.svg";
import coach3 from "../../assets/images/coach3.svg";
import coach4 from "../../assets/images/coach4.svg";

const coaches = [
  {
    id: 1,
    image: coach1,
  },
  {
    id: 2,
    image: coach2,
  },
  {
    id: 3,
    image: coach3,
  },
  {
    id: 4,
    image: coach4,
  },
];

function Coaches() {
  return (
    <section
      id="coaches"
      className="bg-[#232729] py-28"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Coaches
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-white">
            Our Training Force
          </h3>

        </div>

        {/* Coaches */}

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

          {coaches.map((coach) => (

            <div
              key={coach.id}
              className="group overflow-hidden cursor-pointer"
            >

              <img
                src={coach.image}
                alt={`Coach ${coach.id}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Coaches;