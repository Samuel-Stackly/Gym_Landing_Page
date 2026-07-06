import { ArrowLeft, ArrowRight } from "lucide-react";

function HeroSlider() {
  return (
    <div className="absolute bottom-0 left-0 z-20 w-full lg:w-[52%]">
      <div className="bg-white">

        <div className="flex h-24 items-center justify-between px-4 sm:h-28 sm:px-6 lg:h-32 lg:px-8">

          {/* Counter */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            <span className="text-xl font-bold sm:text-2xl lg:text-3xl">
              1
            </span>

            <span className="text-lg text-gray-400 sm:text-xl lg:text-2xl">
              /
            </span>

            <span className="text-xl text-gray-400 sm:text-2xl lg:text-3xl">
              4
            </span>

          </div>

          {/* Progress */}

          <div className="mx-4 flex-1 sm:mx-8 lg:px-10">

            <div className="h-[2px] bg-gray-200">

              <div className="h-full w-1/4 bg-red-600"></div>

            </div>

          </div>

          {/* Arrows */}

          <div className="flex shrink-0 gap-3 sm:gap-5 lg:gap-6">

            <button>
              <ArrowLeft
                size={20}
                className="text-gray-400 transition hover:text-black sm:size-6 lg:size-7"
              />
            </button>

            <button>
              <ArrowRight
                size={20}
                className="transition hover:text-red-600 sm:size-6 lg:size-7"
              />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default HeroSlider;