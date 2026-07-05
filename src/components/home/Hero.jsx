import heroBg from "../../assets/images/hero-bg.png";
import ellipse from "../../assets/icons/Ellipse.png";
import play from "../../assets/icons/play.png";
import HeroSlider from "./HeroSlider";

function Hero() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${heroBg})`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

                {/* Left Side */}
                <div className="hidden lg:flex w-1/4 flex-col items-center">

                    <div className="relative">
                        <img src={ellipse} alt="Ellipse" />

                        <img
                            src={play}
                            alt="Play"
                            className="absolute left-1/2 top-1/2 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        />
                    </div>

                    <p className="mt-20 rotate-[-90deg] text-white font-bold tracking-[4px] uppercase">
                        Play Video
                    </p>

                </div>

                {/* Right Side */}
                <div className="w-full lg:w-3/4">

                    <p className="text-red-500 uppercase tracking-[3px] text-xl font-semibold">
                        Cardio
                    </p>

                    <h1 className="mt-4 text-white font-extrabold uppercase leading-none">
                        <span className="block text-7xl xl:text-8xl">
                            LIVE IT
                        </span>

                        <span className="block mt-4 text-7xl xl:text-8xl">
                            LIKE A ROCK!
                        </span>
                    </h1>

                </div>

            </div>
            <HeroSlider />
        </section>
    );
}

export default Hero;