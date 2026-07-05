import { useState } from "react";
import { ArrowRight } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // Later we'll call API here
  };

  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-24 px-8 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p className="mb-8 text-xl uppercase tracking-wide text-[#ff2a1f]">
            Contact Us
          </p>

          <h2 className="hero-title text-[72px] uppercase leading-none text-[#231815]">
            Get In Touch
          </h2>

          <h2 className="hero-title mt-3 text-[72px] uppercase leading-none text-[#ff2a1f]">
            Reach Out To Us
          </h2>

        </div>

        {/* Right */}

        <form
          onSubmit={handleSubmit}
          className="space-y-12"
        >

          {/* Name */}

          <div>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-b border-gray-300 bg-transparent pb-4 text-xl outline-none placeholder:text-gray-500"
            />

          </div>

          {/* Email */}

          <div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-gray-300 bg-transparent pb-4 text-xl outline-none placeholder:text-gray-500"
            />

          </div>

          {/* Message */}

          <div>

            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full resize-none border-b border-gray-300 bg-transparent pb-4 text-xl outline-none placeholder:text-gray-500"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="flex h-24 w-full items-center justify-center gap-4 bg-[#ff2a1f] hero-title text-3xl uppercase text-white transition hover:bg-red-700"
          >
            Send Message

            <ArrowRight size={24} />
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;