import axios from "axios";

export const fetchTrips = async (keywords = "") => {
  const response = await axios.get(
    `http://localhost:4001/trips?keywords=${keywords}`
  );
  return response.data.data;
};
