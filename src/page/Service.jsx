import React from "react";

const Service = () => {
  return (
    <div data-aos="fade-up" className="min-h-screen pt-[8ch] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">

      {/* ================= HEADER ================= */}
      <section data-aos="fade-up" className="py-16 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Our Services & Facilities
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          At Blue Tech Innovators, we provide a modern, secure, and comfortable
          bus booking experience. Our goal is to combine convenience, safety,
          and affordability for every traveler.
        </p>
      </section>

      {/* ================= BUS TYPES ================= */}
      <section data-aos="fade-up" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Types of Buses
          </h2>

          <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Economy */}
            <div data-aos="fade-up" className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Economy</h3>
              <p>
                Affordable and budget-friendly travel option with comfortable
                seating and essential facilities.
              </p>
            </div>

            {/* Deluxe */}
            <div data-aos="fade-up" className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Deluxe</h3>
              <p>
                Extra legroom, better seating comfort, and air conditioning
                for a smoother travel experience.
              </p>
            </div>

            {/* VIP */}
            <div data-aos="fade-up" className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">VIP</h3>
              <p>
                Premium travel experience with luxury seating, maximum comfort,
                and priority services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Amenities & Comfort
          </h2>

          <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div data-aos="fade-up" className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 hover:scale-105 transition">
              <h3 className="text-lg font-semibold mb-3">Free WiFi</h3>
              <p>Stay connected throughout your journey.</p>
            </div>

            <div data-aos="fade-up" className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 hover:scale-105 transition">
              <h3 className="text-lg font-semibold mb-3">Air Conditioning</h3>
              <p>Enjoy a comfortable and climate-controlled ride.</p>
            </div>

            <div data-aos="fade-up" className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 hover:scale-105 transition">
              <h3 className="text-lg font-semibold mb-3">Reclining Seats</h3>
              <p>Relax with adjustable and ergonomic seating.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SUPPORT & INSURANCE ================= */}
      <section data-aos="fade-up" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Booking Support & Travel Protection
          </h2>

          <p data-aos="fade-up" className="max-w-3xl mx-auto text-lg leading-relaxed">
            We provide dedicated booking support to assist you with seat
            selection, payment confirmation, and ticket management.
            <br /><br />
            Travel insurance options are available to ensure passenger safety
            and provide additional peace of mind during your trip.
          </p>
        </div>
      </section>

      {/* ================= PRICING & ROUTES ================= */}
      <section data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing & Popular Routes
          </h2>

          <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8">

            <div className="p-6 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
              <p>
                Transparent pricing with no hidden charges. Choose from
                Economy, Deluxe, or VIP options based on your budget.
              </p>
            </div>

            <div data-aos="fade-up" className="p-6 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Popular Routes</h3>
              <ul className="space-y-2">
                <li>• Bahir Dar → Addis Ababa</li>
                <li>• Bahir Dar → Gondar</li>
                <li>• Addis Ababa → Hawassa</li>
                <li>• Gondar → Mekelle</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Service;