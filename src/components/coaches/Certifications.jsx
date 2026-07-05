import ifLogo from "../../assets/images/if.svg";
import mtLogo from "../../assets/images/mt.svg";
import ssLogo from "../../assets/images/ss.svg";

const certifications = [
  {
    id: 1,
    image: ifLogo,
    alt: "IFPASA",
  },
  {
    id: 2,
    image: mtLogo,
    alt: "Master Trainer",
  },
  {
    id: 3,
    image: ssLogo,
    alt: "ISSA",
  },
];

function Certifications() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-8">

        <div className="flex flex-wrap items-center justify-center gap-24 lg:gap-40">

          {certifications.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-20 w-auto object-contain transition duration-300 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;