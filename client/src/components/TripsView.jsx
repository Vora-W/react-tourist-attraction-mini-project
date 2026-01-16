import { useState, useEffect } from "react";
import { fetchTrips } from "../api/trips";
import TripCard from "./TripCard";
import SearchBar from "./SearchBar";

function TripsView() {
  const [trips, setTrips] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getTrips = async () => {
    try {
      const getData = await fetchTrips(searchText);
      setTrips(getData);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  useEffect(() => {
    getTrips();
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      {/* Header */}
      <header className="pt-12 pb-6 text-center">
        <h1 className="text-5xl font-semibold text-sky-600">เที่ยวไหนดี</h1>
      </header>

      {/* Search Bar */}
      <SearchBar value={searchText} onChange={handleSearch} />

      {/* Trips List */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
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
    </>
  );
}

export default TripsView;
