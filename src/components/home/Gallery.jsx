import { useState } from "react";

import gym1 from "../../assets/images/gym1.png";
import gym2 from "../../assets/images/gym2.png";
import gym3 from "../../assets/images/gym3.png";
import gym4 from "../../assets/images/gym4.png";
import gym5 from "../../assets/images/gym5.png";

const galleryImages = [
  gym1,
  gym2,
  gym3,
  gym4,
  gym5,
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(galleryImages[1]);

  return (
    <section
      id="gallery"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-[1500px] px-4">

        {/* Main Image */}

        <div className="overflow-hidden">

          <img
            src={selectedImage}
            alt="Gallery"
            className="h-[700px] w-full object-cover transition-all duration-300"
          />

        </div>

        {/* Thumbnails */}

        <div className="-mt-32 flex justify-center gap-4 relative z-10">

          {galleryImages.map((image, index) => (

            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden transition duration-300
                ${
                  selectedImage === image
                    ? "scale-105 border-4 border-white shadow-2xl"
                    : "opacity-80 hover:opacity-100"
                }`}
            >

              <img
                src={image}
                alt={`Gym ${index + 1}`}
                className="h-28 w-44 object-cover"
              />

            </button>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;