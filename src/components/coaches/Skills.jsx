const skills = [
  {
    id: 1,
    name: "BODY BUILDING",
    percentage: 92,
  },
  {
    id: 2,
    name: "CARDIO",
    percentage: 74,
  },
  {
    id: 3,
    name: "WEIGHT TRAINING",
    percentage: 83,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Skills
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-[#444]">
            Skillset Of Our Coach
          </h3>

        </div>

        {/* Content */}

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="text-lg leading-10 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

          </div>

          {/* Right */}

          <div className="space-y-12">

            {skills.map((skill) => (

              <div key={skill.id}>

                <div className="mb-4 flex items-center justify-between">

                  <h4 className="hero-title text-3xl uppercase text-[#222]">
                    {skill.name}
                  </h4>

                  <span className="hero-title text-3xl text-[#222]">
                    {skill.percentage}%
                  </span>

                </div>

                {/* Progress */}

                <div className="h-3 w-full rounded-full bg-red-100">

                  <div
                    className="h-3 rounded-full bg-[#ff2a1f] transition-all duration-700"
                    style={{
                      width: `${skill.percentage}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;