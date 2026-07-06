import heroBg from "../../assets/images/hero-bg.png";
import ellipse from "../../assets/icons/Ellipse.png";
import play from "../../assets/icons/play.png";
import HeroSlider from "./HeroSlider";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${heroBg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-4 pt-24 sm:px-6 lg:px-8">

                {/* Left Side */}
                <div className="hidden w-1/4 flex-col items-center lg:flex">

                    <div className="relative">

                        <img
                            src={ellipse}
                            alt="Ellipse"
                            className="w-32 xl:w-auto"
                        />

                        <img
                            src={play}
                            alt="Play"
                            className="absolute left-1/2 top-1/2 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        />

                    </div>

                    <p className="mt-20 rotate-[-90deg] text-sm font-bold uppercase tracking-[4px] text-white xl:text-base">
                        Play Video
                    </p>

                </div>

                {/* Right Side */}
                <div className="w-full text-center lg:w-3/4 lg:text-left">

                    <p className="text-sm font-semibold uppercase tracking-[4px] text-red-500 sm:text-lg lg:text-xl">
                        Cardio
                    </p>

                    <h1 className="mt-4 font-extrabold uppercase leading-none text-white">

                        <span className="block text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
                            LIVE IT
                        </span>

                        <span className="mt-2 block text-5xl sm:mt-4 sm:text-6xl md:text-7xl xl:text-8xl">
                            LIKE A ROCK!
                        </span>

                    </h1>

                </div>

            </div>

            {/* Slider */}
            <HeroSlider />

        </section>
    );
}

export default Hero;