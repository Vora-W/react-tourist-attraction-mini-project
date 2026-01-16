import { useState, useEffect } from "react";
import axios from "axios";
import TripCard from "./TripsCard";

function TripsView() {
  const [trips, setTrips] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getTrips = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      console.log(response);
      setTrips(response.data.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  useEffect(() => {
    getTrips();
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      getTrips();
    }
  };

  return (
    <div className="min-h-screen w-full text-sm text-gray-400 bg-white">
      {/* Header */}
      <header className="pt-12 pb-6 text-center">
        <h1 className="text-5xl font-semibold text-sky-600">เที่ยวไหนดี</h1>
      </header>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <label className="block mb-1 text-black">ค้นหาที่เที่ยว</label>
        <input
          className="w-full text-center border-b border-gray-300 pb-2 outline-none focus:border-sky-400 placeholder-gray-400"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      {/* Trips List */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        {trips.map((trip) => (
          <TripCard
            key={trip.eid}
            title={trip.title}
            description={trip.description}
            url={trip.url}
            photos={trip.photos}
            tags={trip.tags}
          />
        ))}
      </main>
    </div>
  );
}

export default TripsView;
