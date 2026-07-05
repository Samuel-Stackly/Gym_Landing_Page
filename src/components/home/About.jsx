import girlImage from "../../assets/images/Girl.png";

function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-16 px-8">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            About Us
          </h2>

          <h3 className="nav-font mt-4 text-2xl font-semibold uppercase text-[#333]">
            Know More To Be More With Us
          </h3>

          <p className="mt-10 leading-10 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non quibusdam ut turpis magna suscipit. Lorem etiam sem
            condimentum ultrices mauris lacus. Vel sed eget nulla sit
            sit. Vitae aliquet fames accumsan magna tempor et
            adipiscing aliquet arcu.Mauris nisi mauris dignissim morbi. 
            Donec aliquam nisl eu
            pretium tortor enim nunc risus rhoncus. Urna a eu in nibh
            mi malesuada. Eget curabitur bibendum semper non eget.
          </p>

            
          

        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2">

          <img
            src={girlImage}
            alt="About Girl"
            className="w-full max-w-[650px] object-contain"
          />

        </div>

      </div>
    </section>
  );
}

export default About;