import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars, FaPhone } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bus", label: "Bus" },
    { href: "/service", label: "Service" },
    { href: "/ticket", label: "Ticket" },
  ];

  return (
    <nav
      className="w-full h-16 bg-neutral-100 dark:bg-neutral-900 
            flex items-center justify-between px-4 lg:px-28 
            fixed top-0 z-50 shadow-sm"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-10">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-28 object-contain" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6 text-black dark:text-neutral-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className="hover:text-violet-600 transition duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE DESKTOP */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
          <FaPhone className="text-violet-600" />
          <span className="font-medium">+251 92752 0386</span>
        </div>

        <DarkMode />

        <Link
          to="/login"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition duration-300 font-medium"
        >
          Login
        </Link>
      </div>

      {/* RIGHT SIDE MOBILE */}
      <div className="lg:hidden flex items-center gap-4">
        <DarkMode />
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-neutral-600 dark:text-neutral-300"
        >
          {open ? <LiaTimesSolid /> : <FaBars />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-neutral-100 dark:bg-neutral-900 z-50
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"} flex flex-col py-10 px-6 gap-6`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            onClick={() => setOpen(false)}
            className={`
        text-lg font-medium transition-transform duration-300
        hover:scale-110 hover:text-violet-600
        ${location.pathname === link.href ? "text-yellow-400 font-bold" : "text-black dark:text-neutral-300"}
      `}
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/login"
          onClick={() => setOpen(false)}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md transition transform hover:scale-110 font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
