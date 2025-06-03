import {
  faCrosshairs,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CitiesCards } from "./CitiesCards";
import { getLocation } from "../scripts/getLocation";
import { getWeather } from "../scripts/getWeather";
import { useState } from "react";
import { CurrentWeatherCar } from "./CurrentWeatherCar";

export function GeoForm() {
  const [cityName, setCityName] = useState("");

  const handleLocationClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const location = await getLocation();

    if (!location) {
      alert("Unable to retrieve location. Please try again.");
      return;
    }

    const weatherData = await getWeather(location);

    setCityName(weatherData.name);
  };

  return (
    <div className="pt-4 md:pt-10 xl:pt-20 flex-col items-center justify-center w-full px-4">
      <div className="flex p-2 items-center justify-center gap-4 text-white md:px-40 xl:px-86 w-full">
        <form className="flex items-center bg-white rounded-lg shadow-sm border w-full border-gray-200 p-2">
          <input
            id="cityInput"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            placeholder="London..."
            className="flex-1 px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
          />

          <button
            onClick={handleLocationClick}
            className="p-2 text-white bg-blue-500 rounded-xl h-8 hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faCrosshairs} />
          </button>
        </form>

        <button
          type="submit"
          className="p-2 text-white bg-blue-600 rounded-xl h-10 w-14 transition-colors duration-200 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      </div>

      <CurrentWeatherCar />

      <CitiesCards />
    </div>
  );
}
