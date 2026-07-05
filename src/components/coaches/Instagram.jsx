import { ArrowRight } from "lucide-react";

import bgImage from "../../assets/images/in-bg.png";

import image1 from "../../assets/images/in-1.png";
import image2 from "../../assets/images/in-2.png";
import image3 from "../../assets/images/in-3.png";
import image4 from "../../assets/images/in-4.png";
import image5 from "../../assets/images/in-5.png";
import image6 from "../../assets/images/in-6.png";
import image7 from "../../assets/images/in-7.png";
import image8 from "../../assets/images/in-8.png";

const instagramImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

function Instagram() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Instagram
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-white">
            Follow John Snow On Instagram
          </h3>

        </div>

        {/* Images */}

        <div className="mx-auto mt-20 grid max-w-[1000px] grid-cols-2 gap-8 md:grid-cols-4">

          {instagramImages.map((image, index) => (

            <div
              key={index}
              className="group overflow-hidden cursor-pointer"
            >

              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-16 flex justify-center">

          <button className="flex items-center gap-3 bg-[#ff2a1f] px-10 py-5 hero-title text-2xl uppercase text-white transition hover:bg-red-700">

            Follow

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </section>
  );
}

export default Instagram;