import { ArrowLeft, ArrowRight } from "lucide-react";

function HeroSlider() {
  return (
    <div className="absolute bottom-0 left-0 z-20 w-full lg:w-[52%]">
      <div className="bg-white">
        <div className="mx-auto flex h-32  items-center justify-between px-8">

          {/* Left Counter */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold">1</span>

            <span className="text-gray-400 text-2xl">/</span>

            <span className="text-gray-400 text-3xl">
              4
            </span>
          </div>

          {/* Progress */}
          <div className="flex-1 px-14">
            <div className="h-[2px] bg-gray-200">
              <div className="h-full w-1/4 bg-red-600"></div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-6">

            <button>
              <ArrowLeft
                size={28}
                className="text-gray-400 hover:text-black transition"
              />
            </button>

            <button>
              <ArrowRight
                size={28}
                className="hover:text-red-600 transition"
              />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSlider;