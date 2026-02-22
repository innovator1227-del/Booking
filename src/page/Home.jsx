import React from "react";
import { Link } from "react-router-dom";
import Bus9 from "../assets/Bus9.png";
import Bus1 from "../assets/Bus1.png";
import Bus6 from "../assets/Bus6.png";
import Slider from "react-slick";

const Home = () => {
  const popularRoutes = [
    { from: "Addis Ababa", to: "Bahir Dar", duration: "6h" },
    { from: "Addis Ababa", to: "Gondar", duration: "10h" },
    { from: "Addis Ababa", to: "Hawassa", duration: "4h" },
    { from: "Bahirdar", to: "Gonder", duration: "5h" },
    { from: "Gonder", to: "Mekele", duration: "4h" },
    { from: "Addis Ababa", to: "Mekele", duration: "7h" },
  ];

  const services = [
    { title: "Economy", desc: "Affordable travel with basic amenities" },
    { title: "Deluxe", desc: "Comfortable seats and AC buses" },
    { title: "VIP", desc: "Luxury experience with extra services" },
  ];

  const testimonials = [
    { name: "Abebe", text: "Easy booking and comfortable buses!" },
    { name: "Mulu", text: "Fast and reliable service every time." },
    { name: "Sara", text: "Love the VIP buses with Wi-Fi and snacks." },
  ];

  const heroSlides = [
    {
      id: 1,
      img: Bus9,
      title: "Travel Across Ethiopia",
      description:
        "Book buses from Addis Ababa to Bahir Dar, Gondar, Mekele and more.",
    },
    {
      id: 2,
      img: Bus1,
      title: "Comfortable & Safe",
      description: "Enjoy VIP, Deluxe and Economy services with full comfort.",
    },
    {
      id: 3,
      img: Bus6,
      title: "Fast Online Booking",
      description: "Reserve your seat in seconds with secure online payment.",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-neutral-900 transition-colors duration-300">
      {/* HERO */}
      <div className="relative overflow-hidden min-h-[600px] flex items-center dark:bg-gray-950 dark:text-white">
        <div className="container">
          <Slider {...settings}>
            {heroSlides.map((slide) => (
              <div key={slide.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                  {/* TEXT */}
                  <div className="flex flex-col gap-6 text-center sm:text-left order-2 sm:order-1 px-6">
                    <h1
                      data-aos="zoom-out"
                      className="text-4xl sm:text-6xl font-bold"
                    >
                      {slide.title}
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      {slide.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex justify-center items-center gap-4 mb-10 text-yellow-400"
                    >
                      ⭐⭐⭐⭐⭐
                      <span className="text-white text-sm">
                        4.8/5 Rating • 5,000+ Happy Travelers
                      </span>
                    </div>
                     <div className="flex gap-4">
                      <Link
                      to="/bus"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="bg-gradient-to-r from-green-950 to-indigo-950 text-white px-6 py-3 rounded-full 
                      w-fit hover:scale-105 duration-300"
                    >
                      Explore Route
                    </Link>
                    <Link
                      to="/service"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="bg-gradient-to-r from-green-400 to-indigo-950 text-white px-6 py-3 rounded-full 
                      w-fit hover:scale-105 duration-300"
                    >
                      View Services
                    </Link>
                     <Link
                      to="/about"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="bg-gradient-to-r from-green-950 to-indigo-950 text-white px-6 py-3 rounded-full 
                      w-fit hover:scale-105 duration-300"
                    >
                      Explore Us
                    </Link>
                     </div>
                    
                  </div>

                  {/* IMAGE */}
                  <div className="order-1 sm:order-2 flex justify-center">
                    <img
                      src={slide.img}
                      alt=""
                      data-aos="zoom-in"
                      className="w-[280px] sm:w-[450px] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* SEARCH */}
      <section
        data-aos="fade-up"
        className="w-full flex justify-center mt-10 px-4"
      >
        <div className="w-full max-w-3xl bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="From"
            className="flex-1 px-4 py-2 border rounded-lg dark:bg-neutral-700
           dark:border-neutral-600 dark:text-white"
          />
          <input
            type="text"
            placeholder="To"
            className="flex-1 px-4 py-2 border rounded-lg dark:bg-neutral-700
           dark:border-neutral-600 dark:text-white"
          />
          <input
            type="date"
            className="flex-1 px-4 py-2 border rounded-lg dark:bg-neutral-700
           dark:border-neutral-600 dark:text-white"
          />
          <Link
            to="/bus"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 
          rounded-lg transition duration-300 text-center"
          >
            Search
          </Link>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="mt-16 px-6">
        <h2
          data-aos="fade-up"
          className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Popular Routes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                {route.from} → {route.to}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 mb-3">
                Duration: {route.duration}
              </p>
              <Link
                to="/bus"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Buses
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-16 px-6">
        <h2
          data-aos="fade-right"
          className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md text-center
               hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-16 px-6 mb-16">
        <h2
          data-aos="fade-right"
          className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
        >
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                "{testi.text}"
              </p>
              <h4 className="text-gray-800 dark:text-white font-semibold">
                * {testi.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
