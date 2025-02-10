"use client";

import { useState } from "react";
import { Calendar, Search, ArrowLeftRight } from "lucide-react";

interface Flight {
  airline: string;
  departure: string;
  arrival: string;
  price: number;
}

export default function FlightSearch() {
  const [tripType, setTripType] = useState("roundtrip");
  const [passengers, setPassengers] = useState("1");
  const [cabinClass, setCabinClass] = useState("economy");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleSwapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSearch = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setFlights([
        {
          airline: "Turkish Airlines",
          departure: "10:00",
          arrival: "12:00",
          price: 199,
        },
        {
          airline: "Pegasus",
          departure: "14:00",
          arrival: "16:00",
          price: 149,
        },
      ]);
      setLoading(false);
      setSearched(true);
    }, 1500);
  };

  const resetSearch = () => {
    setSearched(false);
    setFlights([]);
  };

  return (
    <div className=" my-12 p-4 flex items-start justify-center">
      <div className="w-full max-w-4xl space-y-4 -mt-6">
        {!searched ? (
          <div className="bg-[#3c4043] rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              {/* Trip Options */}
              <div className="flex flex-wrap gap-4">
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="bg-[#202124] text-white rounded px-4 py-2 border border-zinc-700 min-w-[140px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="roundtrip">Round trip</option>
                  <option value="oneway">One way</option>
                </select>

                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="bg-[#202124] text-white rounded px-4 py-2 border border-zinc-700 min-w-[140px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </option>
                  ))}
                </select>

                <select
                  value={cabinClass}
                  onChange={(e) => setCabinClass(e.target.value)}
                  className="bg-[#202124] text-white rounded px-4 py-2 border border-zinc-700 min-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>

              {/* Flight Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-3">
                  <input
                    type="text"
                    placeholder="From"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-[#202124] text-white rounded px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-center md:col-span-1">
                  <button
                    onClick={handleSwapLocations}
                    className="p-2 hover:bg-zinc-700 rounded-full transition-colors"
                  >
                    <ArrowLeftRight className="h-5 w-5 text-zinc-400" />
                  </button>
                </div>

                <div className="md:col-span-3">
                  <input
                    type="text"
                    placeholder="Where to"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#202124] text-white rounded px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 col-span-5 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      className="w-full pl-10 bg-[#202124] text-white rounded px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {tripType === "roundtrip" && (
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full pl-10 bg-[#202124] text-white rounded px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="bg-[#8ab4f8] hover:bg-blue-400 text-zinc-900 font-medium px-8 py-2 rounded-full flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Search className="h-4 w-4" />
                  Explore
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#3c4043] rounded-xl p-6 shadow-lg">
            <div className="space-y-4">
              <button
                onClick={resetSearch}
                className="px-4 py-2 border border-zinc-600 text-white rounded hover:bg-zinc-700 transition-colors"
              >
                New Search
              </button>

              {loading ? (
                <div className="flex justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              ) : flights.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4">Airline</th>
                        <th className="text-left py-3 px-4">Departure</th>
                        <th className="text-left py-3 px-4">Arrival</th>
                        <th className="text-right py-3 px-4">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {flights.map((flight, index) => (
                        <tr key={index} className="border-b border-zinc-700">
                          <td className="py-3 px-4">{flight.airline}</td>
                          <td className="py-3 px-4">{flight.departure}</td>
                          <td className="py-3 px-4">{flight.arrival}</td>
                          <td className="py-3 px-4 text-right">
                            ${flight.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-zinc-400">
                  No flights found. Try a different search.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
