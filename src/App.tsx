import React, { useState, useEffect, useCallback } from "react";
import FormInput from "./components/form-input/FormInput";
import WeatherContent from "./components/weather-content/WeatherContent";
import fetchData from "./api/weatherApi";
import LoadingComp from "./components/loading-comp/LoadingComp";
import ErrorModal from "./modals/ErrorModal";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState<any>(null);
  const [userLocation, setUserLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prevChecked) => !prevChecked);

  const fetchDataHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!userLocation.length) {
      setOpenModal(true);
    } else {
      setIsLoading(true);
      await fetchData(userLocation, setData, setOpenModal, "metric");
      setIsLoading(false);
    }
  };

  const defaultDataFetched: any = useCallback(
    async (location = "Tbilisi", unit: "metric" | "imperial" = "metric") => {
      setIsLoading(true);
      if (!data) {
        await fetchData(location, setData, setOpenModal, unit);
      }
      setIsLoading(false);
    },
    [data]
  );

  useEffect(() => {
    const fetchDataAsync = async () => {
      await defaultDataFetched();
    };
    fetchDataAsync();
  }, [defaultDataFetched]);

  useEffect(() => {
    defaultDataFetched();
  }, [defaultDataFetched]);

  return (
    <>
      <div className="main-app-layout-container">
        <Header />
        <main className="weathear-container">
          <ErrorModal
            openModal={openModal}
            onClose={() => setOpenModal(false)}
          />
          <FormInput
            text={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserLocation(e.target.value)
            }
            submit={fetchDataHandler}
            func={fetchDataHandler}
          />
          {isLoading ? (
            <LoadingComp />
          ) : data ? (
            <WeatherContent
              country={data.sys.country}
              location={data.name}
              degrees={
                checked
                  ? ((data.main.temp * 9) / 5 + 32).toFixed(2)
                  : data.main.temp.toFixed(2)
              }
              feelsLike={
                checked
                  ? ((data.main.feels_like * 9) / 5 + 32).toFixed(2)
                  : data.main.feels_like.toFixed(2)
              }
              icon={data.weather[0].icon}
              description={data.weather[0].description}
              humidity={data.main.humidity}
              wind={data.wind.speed}
              visibility={data.visibility}
              seaLevel={data.main.sea_level}
              checked={checked}
              onToggle={handleChange}
            />
          ) : null}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
