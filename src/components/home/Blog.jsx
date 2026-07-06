import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    date: "22 NOV",
    title: "Build yourself in hours of exercise everyday for 6 months.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
  },
  {
    id: 2,
    image: blog2,
    date: "22 NOV",
    title: "Fat burning cardio workout to keep yourself in shape",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
  },
  {
    id: 3,
    image: blog3,
    date: "22 NOV",
    title: "Crossfit Guide for beginners: 10 things you must know",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-4xl uppercase text-[#ff2a1f] sm:text-5xl lg:text-6xl">
            Blog
          </h2>

          <h3 className="nav-font mt-3 text-xl uppercase text-[#444] sm:text-2xl">
            Read To Stay In Shape
          </h3>

        </div>

        {/* Blog Cards */}

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:mt-20 xl:grid-cols-3 xl:gap-10">

          {blogs.map((blog) => (

            <article
              key={blog.id}
              className="group overflow-hidden rounded-lg bg-white cursor-pointer"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[280px] lg:h-[330px]"
                />

                {/* Date Badge */}

                <div className="absolute right-4 top-4 bg-[#ff2a1f] px-4 py-2 sm:right-5 sm:top-5 sm:px-5 sm:py-3">

                  <span className="hero-title text-lg uppercase text-white sm:text-2xl lg:text-3xl">
                    {blog.date}
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="mt-6 px-2 pb-2 sm:mt-8">

                <h3 className="text-2xl font-semibold leading-snug text-[#222] sm:text-3xl lg:text-[34px]">
                  {blog.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8 lg:leading-9">
                  {blog.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Blog;