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
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Review
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-[#444]">
            Read What People Says
          </h3>

        </div>

        {/* Review */}

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <img
              src={reviews[0].image}
              alt={reviews[0].name}
              className="w-full max-w-[520px]"
            />

          </div>

          {/* Right */}

          <div>

            <p className="text-lg leading-10 text-gray-600">
              {reviews[0].review}
            </p>

            <h4 className="hero-title mt-10 inline-block border-b-4 border-blue-500 text-4xl uppercase text-[#222]">
              {reviews[0].name}
            </h4>

            <div className="mt-10 flex gap-6">

              <button className="transition hover:text-[#ff2a1f]">
                <ArrowLeft size={26} />
              </button>

              <button className="text-gray-300 transition hover:text-[#ff2a1f]">
                <ArrowRight size={26} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Review;