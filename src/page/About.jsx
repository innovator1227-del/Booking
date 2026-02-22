import React, { useEffect } from "react";
import Bus1 from "../assets/Bus1.png";
import Bus3 from "../assets/Bus3.png";
import Bus6 from "../assets/Bus6.png";
import Slider from "react-slick";
import BD from "../assets/BD.png";
const About = () => {
  const busfleet = [
    {
      id: 1,
      img: Bus3,
    },
    {
      id: 2,
      img: Bus1,
    },
    {
      id: 3,
      img: Bus6,
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
    <div className="min-h-screen pt-[8ch] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* ================= COMPANY INTRODUCTION ================= */}
      <section data-aos="fade-up" className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About Blue Tech Innovators
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
          Blue Tech Innovators is a student-led software development team from
          Bahirdar University. We are four passionate Software Engineering
          students dedicated to building modern, reliable, and user-friendly
          digital solutions.
          <br />
          <br />
          Our mission is to create an easier and smarter bus booking system that
          saves time, increases convenience, and builds trust between passengers
          and transport providers.
        </p>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section data-aos="fade-up" className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Our Service?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              className="p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Easy Online Booking
              </h3>
              <p>
                Book your bus ticket anytime, anywhere with a simple and
                intuitive interface.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p>
                Your booking information is stored safely. We focus on trust,
                data security, and accurate ticket management.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Seat Selection System
              </h3>
              <p>
                Real-time seat selection prevents double booking and ensures a
                smooth experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLEET SLIDER SECTION ================= */}
      <section data-aos="fade-up" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12"
          >
            Our Fleet
          </h2>

          <Slider {...settings}>
            {busfleet.map((slide) => (
              <div key={slide.id} className="flex justify-center">
                <img
                  src={slide.img}
                  alt="Bus Fleet"
                  data-aos="zoom-in"
                  className="w-[280px] sm:w-[450px] object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ================= STATION SECTION (NOT SLIDER) ================= */}
      <section data-aos="fade-up" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12"
          >
            Our Main Station – Bahir Dar
          </h2>

          <div
            data-aos="fade-up"
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={BD}
              alt="Bahir Dar Bus Station"
              className="w-full h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>
      {/* ================= TEAM SECTION ================= */}
      <section data-aos="fade-up" className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
            Meet Our Team
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-3xl mx-auto text-lg leading-relaxed"
          >
            We are four Software Engineering students from Bahirdar University.
            As Blue Tech Innovators, we collaborate to design and develop
            innovative digital platforms that improve transportation
            accessibility and efficiency.
            <br />
            <br />
            Our goal is to combine technology and transportation to deliver a
            seamless, trustworthy, and user-friendly booking experience.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section data-aos="fade-up" className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
            Contact Us
          </h2>

          <p data-aos="fade-up" data-aos-delay="100" className="mb-6">
            Have questions or suggestions? We'd love to hear from you.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="space-y-3 text-lg"
          >
            <p>
              <strong>Email:</strong> bluetechinnovators@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Bahirdar University, Ethiopia
            </p>
            <p>
              <strong>Team:</strong> Blue Tech Innovators (4 Members)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
