import React from "react";
import {
  FaMapPin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      className="w-full bg-white dark:bg-neutral-900/90 text-neutral-800
     dark:text-neutral-200 px-4 sm:px-7 md:px-16 lg:px-28 py-10"
    >
      {/* Top Section */}
      <div
        data-aos="fade-up"
        className="flex flex-col lg:flex-row lg:justify-between gap-10"
      >
        {/* Logo & Description */}
        <div className="flex-1 space-y-5">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              data-aos="fade-up"
              className="w-44 h-auto object-contain"
            />
          </Link>
          <p
            data-aos="fade-up"
            className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base"
          >
            <p>
              Blue Tech Innovators is committed to delivering a secure,
              reliable, and user-friendly online bus booking experience. Built
              by Software Engineering students at Bahirdar University, our
              platform focuses on convenience, transparency, and customer trust
              to make travel booking simple and efficient.
            </p>
          </p>

          {/* Social Media */}
          <div data-aos="fade-up" className="flex gap-4 mt-2">
            <Link
              to="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="#"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="#"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="#"
              className="hover:text-blue-700 dark:hover:text-blue-500 transition"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* About Us Links */}
        <div data-aos="fade-up" className="flex-1 space-y-5">
          <h2 data-aos="fade-up" className="text-lg font-semibold">
            About Us
          </h2>
          <ul data-aos="fade-up" className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div data-aos="fade-up" className="flex-1 space-y-5">
          <h2 data-aos="fade-up" className="text-lg font-semibold">
            Services
          </h2>
          <ul data-aos="fade-up" className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                Safety Guarantee
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                FAQ & Support
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                Luxury Buses
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-600 transition">
                Enough Facilities
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" className="flex-1 space-y-5">
          <h2 className="text-lg font-semibold">Blue Tech Innovator</h2>
          <div className="space-y-4 text-sm">
            <div className="flex gap-2 items-start">
              <FaMapPin className="text-xl text-neutral-600 dark:text-neutral-400 mt-1" />
              <div className="flex flex-col">
                <p className="text-neutral-600 dark:text-neutral-400">
                  For Support & Reservations
                </p>
                <p className="text-neutral-800 dark:text-neutral-300">
                  123 Main Street, Anytown, USA
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="flex gap-2 items-start">
              <FaMapPin className="text-xl text-neutral-600 dark:text-neutral-400 mt-1" />
              <div className="flex flex-col">
                <p className="text-neutral-600 dark:text-neutral-400">
                  Call Us
                </p>
                <p className="text-neutral-800 dark:text-neutral-300">
                  +251 92752 0386
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="flex gap-2 items-start">
              <FaMapPin className="text-xl text-neutral-600 dark:text-neutral-400 mt-1" />
              <div className="flex flex-col">
                <p className="text-neutral-600 dark:text-neutral-400">Email</p>
                <p className="text-neutral-800 dark:text-neutral-300">
                  {" "}
                  bluetechinnovators@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div
        data-aos="fade-up"
        className="mt-10 border-t border-neutral-300 dark:border-neutral-700 pt-4 text-center text-sm
       text-neutral-500 dark:text-neutral-400"
      >
        © {new Date().getFullYear()} Blue Tech Innovator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
