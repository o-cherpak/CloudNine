import { useCallback, useEffect, useState } from "react";
import type {
  GroupedWeatherData,
  WeatherForecastResponse,
} from "../../interfaces/IWeatherData";
import { groupByDate } from "../../scripts/getGroupedByDates";
import { getWeather } from "../../scripts/getWeather";

export function HourlyWeatherCard(
  geoData: Readonly<{ lat: number; lon: number }>
) {
  const [weatherData, setWeatherData] =
    useState<WeatherForecastResponse | null>(null);

  const weather = weatherData;

  const fetchWeather = useCallback(async () => {
    const weather = await getWeather(geoData, 4);

    if (!weather) {
      alert("Weather data not found. Please check your location.");
      setWeatherData(null);

      return;
    }

    setWeatherData(weather as WeatherForecastResponse);
  }, [geoData]);

  useEffect(() => {
    fetchWeather();
  }, [geoData, fetchWeather]);

  let groupedData: GroupedWeatherData = {};

  if (weather) {
    groupedData = groupByDate(weather.list);
  }

  const dates = Object.keys(groupedData);

  return (
    <div className="flex lg:flex-row justify-around items-center w-full p-2 sm:p-4">
      <div className="bg-gradient-to-br to-blue-600 from-indigo-700 rounded-2xl p-4 sm:p-6 shadow-xl text-white w-full">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Today</h2>

          <span className="text-lg sm:text-xl font-semibold">
            {new Date().toLocaleTimeString("uk-UA", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
          By hour:
        </h3>
        
        <div className="flex xl:justify-center overflow-x-auto pb-2 gap-2 sm:gap-6">
          {dates.length > 0 &&
            groupedData[dates[0]].map((forecast) => (
              <div
                key={forecast.dt}
                className=" bg-white/10 hover:scale-105 ease duration-300 p-2 sm:p-3 rounded-lg backdrop-blur-sm text-center min-w-[70px] sm:min-w-[100px]"
              >
                <p className="font-medium text-xs sm:text-base">
                  {new Date(forecast.dt * 1000).toLocaleTimeString("uk-UA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>

                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                  className="w-8 h-8 sm:w-12 sm:h-12 mx-auto"
                />
                <p className="text-xs sm:text-sm text-gray-300">
                  {forecast.weather[0].main}
                </p>

                <p className="font-bold text-sm sm:text-base">
                  {Math.round(forecast.main.temp)}°C
                </p>
              </div>
            ))}
        </div>
      </div>

      <img
        className="hidden xl:flex h-40 sm:h-80"
        src="images/undraw_fun-moments_x0p9.svg"
        alt="fun-moments"
      />
    </div>
  );
}
