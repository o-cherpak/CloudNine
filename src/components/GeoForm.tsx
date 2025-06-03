import {
  faCrosshairs,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CitiesCards } from "./CitiesCards";
import { getLocation } from "../scripts/getLocation";
import { getWeather } from "../scripts/getWeather";
import { useState } from "react";

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

    console.log(weatherData);

    setCityName(weatherData.name);
  };

  return (
    <div className="pt-4 md:pt-10 xl:pt-20">
      <div className="flex p-2 items-center justify-center text-white ">
        <h1 className="hidden text-center font-medium text-2xl">
          Write your location
        </h1>

        <form className="flex items-center bg-white rounded-lg shadow-sm border md:w-1/2 border-gray-200 p-2">
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
          className="ml-4 p-2 text-white bg-blue-600 rounded-xl h-10 w-14 transition-colors duration-200 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      </div>

      <CitiesCards />
    </div>
  );
}
