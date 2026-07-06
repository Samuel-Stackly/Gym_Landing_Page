import girlImage from "../../assets/images/Girl.png";

function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col-reverse items-center gap-10 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">

        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <h2 className="hero-title text-4xl uppercase text-[#ff2a1f] sm:text-5xl lg:text-6xl">
            About Us
          </h2>

          <h3 className="nav-font mt-3 text-xl font-semibold uppercase text-[#333] sm:text-2xl">
            Know More To Be More With Us
          </h3>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:mt-8 sm:text-lg sm:leading-9 lg:mt-10 lg:leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non quibusdam ut turpis magna suscipit. Lorem etiam sem
            condimentum ultrices mauris lacus. Vel sed eget nulla sit
            sit. Vitae aliquet fames accumsan magna tempor et
            adipiscing aliquet arcu. Mauris nisi mauris dignissim
            morbi. Donec aliquam nisl eu pretium tortor enim nunc
            risus rhoncus. Urna a eu in nibh mi malesuada. Eget
            curabitur bibendum semper non eget.
          </p>

        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2">

          <img
            src={girlImage}
            alt="About Girl"
            className="w-full max-w-[320px] object-contain sm:max-w-[450px] lg:max-w-[650px]"
          />

        </div>

      </div>
    </section>
  );
}

export default About;