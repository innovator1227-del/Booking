import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Bus1 from "../assets/Bus1.png";
import Bus3 from "../assets/Bus6.png";
import Bus4 from "../assets/Bus4.png";
import Bus6 from "../assets/Bus6.png";
import Bus7 from "../assets/Bus7.png";
import Bus0 from "../assets/Bus0.png";
import Bus8 from "../assets/Bus8.png";
import Bus10 from "../assets/Bus10.png";
import Bus11 from "../assets/Bus11.jpg";
import Bus12 from "../assets/Bus12.jpg";
import Fikr from "../assets/Fikr.jpg";
import GoldBus from "../assets/GoldBus.jpg";

const Bus = () => {
  // ---------------- STATES ----------------
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  // ---------------- CITY LIST ----------------
  const cities = ["Addis Ababa", "Bahir Dar", "Gondar", "Mekele", "Hawassa"];

  // ---------------- BUSES DATA ----------------
  const buses = [
    {
      id: 1,
      name: "Tebie Bus",
      type: "VIP",
      passengers: 60,
      from: "Addis Ababa",
      to: "Bahir Dar",
      date: "2026-02-22",
      image: Bus1,
    },
    {
      id: 2,
      name: "Yaschil Bus",
      type: "Deluxe",
      passengers: 60,
      from: "Addis Ababa",
      to: "Gondar",
      date: "2026-02-23",
      image: Bus7,
    },
    {
      id: 3,
      name: "Minyamir Bus",
      type: "Economy",
      passengers: 60,
      from: "Addis Ababa",
      to: "Hawassa",
      date: "2026-02-24",
      image: Bus3,
    },
    {
      id: 4,
      name: "Rahel Bus",
      type: "VIP",
      passengers: 40,
      from: "Bahir Dar",
      to: "Gondar",
      date: "2026-02-25",
      image: Bus4,
    },
    {
      id: 5,
      name: "Tebie Bus",
      type: "Deluxe",
      passengers: 50,
      from: "Addis Ababa",
      to: "Mekele",
      date: "2026-02-26",
      image: Bus6,
    },
    {
      id: 6,
      name: "Yaschil Bus",
      type: "Deluxe",
      passengers: 85,
      from: "Bahir Dar",
      to: "Mekele",
      date: "2026-02-27",
      image: Bus0,
    },
    {
      id: 7,
      name: "Minyamir Bus",
      type: "VIP",
      passengers: 65,
      from: "Gondar",
      to: "Hawassa",
      date: "2026-02-28",
      image: Bus8,
    },
    {
      id: 8,
      name: "Rahel Bus",
      type: "VIP",
      passengers: 75,
      from: "Addis Ababa",
      to: "Bahir Dar",
      date: "2026-03-01",
      image: Bus10,
    },
    {
      id: 9,
      name: "Tebie Bus",
      type: "Economy",
      passengers: 78,
      from: "Bahir Dar",
      to: "Gondar",
      date: "2026-03-02",
      image: Bus11,
    },
    {
      id: 10,
      name: "Yaschil Bus",
      type: "Deluxe",
      passengers: 45,
      from: "Addis Ababa",
      to: "Mekele",
      date: "2026-03-03",
      image: Bus12,
    },
    {
      id: 11,
      name: "Minyamr Bus",
      type: "Economy",
      passengers: 50,
      from: "Gondar",
      to: "Hawassa",
      date: "2026-03-04",
      image: Fikr,
    },
    {
      id: 12,
      name: "Rahel Bus",
      type: "VIP",
      passengers: 60,
      from: "Addis Ababa",
      to: "Bahir Dar",
      date: "2026-03-05",
      image: GoldBus,
    },
  ];

  // ---------------- FILTER BUSES ----------------
  const filteredBuses = buses.filter(
    (bus) =>
      bus.name.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "" || bus.type === typeFilter) &&
      (fromCity === "" || bus.from === fromCity) &&
      (toCity === "" || bus.to === toCity) &&
      (travelDate === "" || bus.date === travelDate),
  );

  // ---------------- AUTOCOMPLETE HANDLERS ----------------
  const handleFromChange = (e) => {
    const val = e.target.value;
    setFromCity(val);
    setFromSuggestions(
      cities.filter((city) => city.toLowerCase().includes(val.toLowerCase())),
    );
  };

  const handleToChange = (e) => {
    const val = e.target.value;
    setToCity(val);
    setToSuggestions(
      cities.filter((city) => city.toLowerCase().includes(val.toLowerCase())),
    );
  };

  // ---------------- SEARCH BUTTON ----------------
  const handleSearch = () => {
    // Nothing extra needed, filteredBuses is reactive
    console.log({ search, fromCity, toCity, travelDate, typeFilter });
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-8 pt-[8ch]">
      {/* ---------------- SEARCH & FILTER ---------------- */}
      <div
        data-aos="fade-down"
        className="flex flex-col md:flex-row flex-wrap justify-between items-center mb-10 gap-4"
      >
        <div className="flex flex-wrap gap-2 w-full md:flex-1 items-center">
          {/* Search Bus */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search Bus..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300
               dark:border-gray-500 dark:bg-gray-800 dark:text-white
               focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <IoMdSearch
              size={30}
              className="absolute right-3 top-1/2 -translate-y-1/2
               text-gray-500 dark:text-gray-300 pointer-events-none"
            />
          </div>

          {/* From City */}
          <div className="relative min-w-[140px]">
            <input
              type="text"
              placeholder="From"
              value={fromCity}
              onChange={handleFromChange}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800
            dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-blue-500 min-w-[150px]"
            />
            {fromSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white dark:bg-gray-700 shadow-md rounded-b-lg max-h-40 overflow-y-auto">
                {fromSuggestions.map((city, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                    onClick={() => {
                      setFromCity(city);
                      setFromSuggestions([]);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* To City */}
          <div className="relative min-w-[140px]">
            <input
              type="text"
              placeholder="To"
              value={toCity}
              onChange={handleToChange}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800
            dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-blue-500 min-w-[150px]"
            />
            {toSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white dark:bg-gray-700 shadow-md rounded-b-lg max-h-40 overflow-y-auto">
                {toSuggestions.map((city, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                    onClick={() => {
                      setToCity(city);
                      setToSuggestions([]);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Travel Date */}
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800
            dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-blue-500 min-w-[150px]"
          />

          {/* Bus Type */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-700 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-green-900 min-w-[140px]"
          >
            <option value="">Bus Type</option>
            <option value="VIP">VIP</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Economy">Economy</option>
          </select>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-green-950 text-white px-5 py-2 rounded-full hover:scale-105 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>

      {/* ---------------- BUSES GRID ---------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 py-6">
        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus, index) => (
            <div
              key={bus.id + index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
              transition duration-300 flex flex-col"
            >
              <img
                src={bus.image}
                alt={bus.name}
                className="w-full h-48 sm:h-40 md:h-48 object-cover"
              />

              <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="font-semibold text-lg">{bus.name}</h2>
                <span className="text-gray-400 text-sm">
                  {bus.passengers} Passengers
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  From {bus.from} → To {bus.to}
                </p>
                <Link
                  to="/ticket"
                  state={{ selectedBus: bus }}
                  className="mt-auto bg-gradient-to-r from-green-600 to-indigo-700 text-white px-6 py-2 
                  rounded-full w-fit hover:scale-105 transition duration-300"
                >
                  Continue to Book
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-300">
            No buses found for your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bus;
