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
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="hero-title text-6xl uppercase text-[#ff2a1f]">
            Blog
          </h2>

          <h3 className="nav-font mt-4 text-2xl uppercase text-[#444]">
            Read To Stay In Shape
          </h3>

        </div>

        {/* Blog Cards */}

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3">

          {blogs.map((blog) => (

            <article
              key={blog.id}
              className="group cursor-pointer"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-[330px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Date */}

                <div className="absolute right-5 top-5 bg-[#ff2a1f] px-6 py-3">

                  <span className="hero-title text-3xl uppercase text-white">
                    {blog.date}
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="mt-8">

                <h3 className="text-[34px] leading-snug text-[#222]">
                  {blog.title}
                </h3>

                <p className="mt-6 text-lg leading-9 text-gray-500">
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