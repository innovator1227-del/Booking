import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import QRCode from "qrcode";

const Ticket = () => {
  const location = useLocation();
  const selectedBus = location.state?.selectedBus;

  // Tickets from localStorage
  const [tickets, setTickets] = useState(() => {
    const savedTickets = localStorage.getItem("tickets");
    return savedTickets ? JSON.parse(savedTickets) : [];
  });

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerName, setPassengerName] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [fromCity, setFromCity] = useState(selectedBus?.from || "");
  const [toCity, setToCity] = useState(selectedBus?.to || "");
  const [successMessage, setSuccessMessage] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterRoute, setFilterRoute] = useState("");


  // Persist tickets
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  // Seat list
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  // Disable seats already booked for selected bus & date
  const bookedSeats = tickets
    .filter((t) => t.bus === selectedBus?.name && t.date === travelDate)
    .flatMap((t) => t.seats);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };

  // Confirm booking
  const confirmBooking = async () => {
    if (
      !passengerName ||
      !travelDate ||
      selectedSeats.length === 0 ||
      !fromCity ||
      !toCity
    ) {
      alert("Please fill all fields");
      return;
    }

    const newTicket = {
      id: "TKT" + Math.floor(Math.random() * 100000),
      bus: selectedBus?.name || "Bus Name",
      from: fromCity,
      to: toCity,
      date: travelDate,
      seats: selectedSeats,
      passenger: passengerName,
      status: "Confirmed",
    };

    setTickets([...tickets, newTicket]);
    setSelectedSeats([]);
    setPassengerName("");
    setTravelDate("");
    setFromCity(selectedBus?.from || "");
    setToCity(selectedBus?.to || "");
    setSuccessMessage("Booking Successful!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Cancel ticket
  const cancelTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };


const printTicket = async (ticket) => {
  // Generate QR code as base64
  const qrData = await QRCode.toDataURL(ticket.id);

  const printWindow = window.open("", "_blank", "width=700,height=900");

  printWindow.document.write(`
    <html>
      <head>
        <title>Bus Ticket - ${ticket.id}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100 p-6">
        <div class="max-w-lg mx-auto bg-white rounded-xl shadow-lg border border-gray-300 p-6">
          <div class="bg-purple-600 text-white text-center rounded-t-xl p-4 mb-4">
            <h1 class="text-xl font-bold">Bus Ticket</h1>
            <p class="text-sm">Ticket ID: ${ticket.id}</p>
          </div>

          <div class="mb-4">
            <h2 class="text-lg font-semibold mb-1">Passenger</h2>
            <p>${ticket.passenger}</p>
          </div>

          <div class="mb-4">
            <h2 class="text-lg font-semibold mb-1">Bus Info</h2>
            <p><strong>Bus:</strong> ${ticket.bus}</p>
            <p><strong>Route:</strong> ${ticket.from} → ${ticket.to}</p>
            <p><strong>Date:</strong> ${ticket.date}</p>
          </div>

          <div class="mb-4">
            <h2 class="text-lg font-semibold mb-2">Seats</h2>
            <div class="flex flex-wrap gap-2">
              ${ticket.seats.map(seat => `<span class="bg-purple-600 text-white px-3 py-1 rounded">${seat}</span>`).join("")}
            </div>
          </div>

          <div class="text-center mt-4">
            <img src="${qrData}" class="mx-auto" />
            <p class="text-sm text-gray-500 mt-1">Scan for verification</p>
          </div>

          <div class="text-center mt-6 text-gray-500 text-sm">
            Printed on: ${new Date().toLocaleDateString()}
          </div>
        </div>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
};
  // Filter tickets
  const filteredTickets = tickets.filter(
    (ticket) =>
      (filterDate === "" || ticket.date === filterDate) &&
      (filterRoute === "" ||
        ticket.from.toLowerCase().includes(filterRoute.toLowerCase()) ||
        ticket.to.toLowerCase().includes(filterRoute.toLowerCase())),
  );

  return (
    <div className="min-h-screen pt-[8ch] px-4 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Selected Bus */}
      {selectedBus && (
        <div
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Selected Bus</h2>
          <p>
            <strong>Bus:</strong> {selectedBus.name}
          </p>
          <p>
            <strong>Type:</strong> {selectedBus.type}
          </p>
          <p>
            <strong>Passengers:</strong> {selectedBus.passengers}
          </p>
        </div>
      )}

      {/* Booking Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Seat Selection */}
        <div
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <h2 className="text-lg font-bold mb-4">Seat Selection</h2>
          <div className="grid grid-cols-4 gap-3">
            {seats.map((seat) => (
              <button
                key={seat}
                onClick={() => toggleSeat(seat)}
                disabled={bookedSeats.includes(seat)}
                className={`p-3 rounded-lg ${
                  bookedSeats.includes(seat)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : selectedSeats.includes(seat)
                      ? "bg-purple-600 text-white hover:scale-105 transition"
                      : "bg-gray-300 dark:bg-gray-700 hover:scale-105 transition"
                }`}
              >
                {seat}
              </button>
            ))}
          </div>
        </div>

        {/* Passenger Form */}
        <div
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <h2 className="text-lg font-bold mb-4">Passenger Details</h2>
          <input
            type="text"
            placeholder="Passenger Name"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-lg border dark:bg-gray-700"
          />
          <input
            type="text"
            placeholder="From City"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-lg border dark:bg-gray-700"
          />
          <input
            type="text"
            placeholder="To City"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-lg border dark:bg-gray-700"
          />
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-lg border dark:bg-gray-700"
          />
          <button
            onClick={confirmBooking}
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Confirm Booking
          </button>
          {successMessage && (
            <p className="text-green-500 mt-3">{successMessage}</p>
          )}
        </div>
      </div>

      {/* Tickets Dashboard */}
      <div
        data-aos="fade-up"
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
      >
        <h2 className="text-xl font-bold mb-6">My Tickets</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 rounded-lg border dark:bg-gray-700"
          />
          <input
            type="text"
            placeholder="Filter by route"
            value={filterRoute}
            onChange={(e) => setFilterRoute(e.target.value)}
            className="px-4 py-2 rounded-lg border dark:bg-gray-700"
          />
        </div>

        {/* Ticket Cards */}
        <div className="space-y-6">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                data-aos="fade-up"
                className="border dark:border-gray-600 p-5 rounded-lg flex flex-col md:flex-row justify-between gap-4"
              >
                <div>
                  <p>
                    <strong>Ticket ID:</strong> {ticket.id}
                  </p>
                  <p>
                    <strong>Bus:</strong> {ticket.bus}
                  </p>
                  <p>
                    <strong>Route:</strong> {ticket.from} → {ticket.to}
                  </p>
                  <p>
                    <strong>Date:</strong> {ticket.date}
                  </p>
                  <p>
                    <strong>Seats:</strong> {ticket.seats.join(", ")}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        ticket.status === "Cancelled"
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {ticket.status || "Confirmed"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => printTicket(ticket)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Print / Download
                  </button>
                  <button
                    onClick={() => cancelTicket(ticket.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tickets found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
