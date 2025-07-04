import {
  faCrosshairs,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLocation } from "../scripts/getLocation";
import { getWeather } from "../scripts/getWeather";
import { useState, type FormEvent } from "react";
import { getGeoByCity } from "../scripts/getGeo";
import { WeatherNavigation } from "./Forencast/WeatherNavigation";
import type { WeatherData } from "../interfaces/IWeatherData";
import { WeatherMaps } from "./WeatherMaps/WeatherMaps";
import { notifyError } from "../scripts/notify";
import { ToastContainer } from "react-toastify";
import { LastCities } from "./LastCities";

export function Main() {
  const [geoData, setGeoData] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [cityName, setCityName] = useState("");
  const [cityToSave, setCityToSave] = useState("");

  const handleLocationClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const location = await getLocation();
    console.log(location);

    if (!location) {
      notifyError("Unable to retrieve location. Please try again.");
      return;
    }

    const weatherData = (await getWeather(location, 1)) as WeatherData;

    setCityName(weatherData.name);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(cityName);
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleSubmit(cityName);
  };

  async function handleSubmit(cityName: string) {
    const geo = await getGeoByCity(cityName);

    if (!geo) {
      notifyError("City not found. Please check the name and try again.");
      return;
    }

    setGeoData(geo);

    if (cityName) {
      setCityToSave(cityName);
    }
  }

  return (
    <div className="pt-4 md:pt-10 flex-col items-center justify-center w-full px-4">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex p-2 items-center justify-center gap-4 text-white md:px-40 xl:px-86 w-full">
        <form
          onSubmit={(e) => submit(e)}
          id="form"
          className="flex items-center bg-white rounded-lg shadow-sm border w-full border-gray-200 p-2 space-x-2 xl:space-x-40"
        >
          <input
            id="cityInput"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            type="text"
            placeholder="London..."
            className="flex-1 px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
          />

          <button
            onClick={handleLocationClick}
            className="p-2 text-white hover:cursor-pointer bg-blue-500 rounded-xl h-8 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faCrosshairs} />
          </button>
        </form>

        <button
          type="submit"
          form="form"
          className="p-2 text-white bg-blue-600 hover:cursor-pointer hover:bg-blue-700  rounded-xl h-10 w-14 transition-colors duration-200 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      </div>

      <LastCities
        cityName={cityToSave}
        onCityClick={(clickedCity) => {
          setCityName(clickedCity);
          handleSubmit(clickedCity);
        }}
      />

      {geoData && <WeatherNavigation lat={geoData.lat} lon={geoData.lon} />}

      {geoData && <WeatherMaps lat={geoData.lat} lon={geoData.lon} />}
    </div>
  );
}
