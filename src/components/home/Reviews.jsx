import { ArrowLeft, ArrowRight } from "lucide-react";
import reviewImage from "../../assets/images/review.png";

const reviews = [
  {
    id: 1,
    name: "Neil Francls",
    review:
      "Lorem ipsum dolor sit amet consectetur. Magnis massa fringilla purus porta sed varius. Mauris egestas pharetra sed id eget. Vulputate malesuada purus amet turpis arcu venenatis cum nisl. Lorem tincidunt urna laoreet auctor. Vestibulum sit quam mi dui egestas convallis a tellus. Id urna aliquam risus mauris lectus lorem convallis elit.",
    image: reviewImage,
  },
];

function Review() {
  return (
    <section
      id="reviews"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-4xl uppercase text-[#ff2a1f] sm:text-5xl lg:text-6xl">
            Review
          </h2>

          <h3 className="nav-font mt-3 text-xl uppercase text-[#444] sm:text-2xl">
            Read What People Says
          </h3>

        </div>

        {/* Review */}

        <div className="mt-12 grid items-center gap-10 md:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">

          {/* Left */}

          <div className="flex justify-center">

            <img
              src={reviews[0].image}
              alt={reviews[0].name}
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px]"
            />

          </div>

          {/* Right */}

          <div className="text-center lg:text-left">

            <p className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9 lg:leading-10">
              {reviews[0].review}
            </p>

            <h4 className="hero-title mt-8 inline-block border-b-4 border-blue-500 pb-2 text-3xl uppercase text-[#222] sm:text-4xl">
              {reviews[0].name}
            </h4>

            <div className="mt-8 flex justify-center gap-5 lg:justify-start lg:gap-6">

              <button className="transition hover:text-[#ff2a1f]">
                <ArrowLeft
                  size={22}
                  className="sm:size-6 lg:size-7"
                />
              </button>

              <button className="text-gray-300 transition hover:text-[#ff2a1f]">
                <ArrowRight
                  size={22}
                  className="sm:size-6 lg:size-7"
                />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Review;