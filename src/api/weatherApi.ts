import axios from "axios";

const fetchData = async (
  userLocation: string,
  setData: Function,
  setOpenModal: Function,
  unit: "metric" | "imperial"
) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`
    );
    const data = await res.data;
    setData(data);
    setOpenModal(false);
  } catch (err) {
    setOpenModal(true);
  }
};

export default fetchData;
