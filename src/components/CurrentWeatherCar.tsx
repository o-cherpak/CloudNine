import { useCallback, useEffect, useState } from "react";
import { getWeather } from "../scripts/getWeather";
import type { WeatherData } from "../interfaces/IWeatherData";
import { getWeatherIcon } from "../scripts/getWeatherBgAndIcon";

export function CurrentWeatherCar(
  geoData: Readonly<{ lat: number; lon: number }>
) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeather = useCallback(async () => {
    const weather = await getWeather(geoData, 1);

    console.log("Weather data:", weather);

    if (!weather) {
      alert("Weather data not found. Please check your location.");
      setWeatherData(null);

      return;
    }

    setWeatherData(weather as WeatherData);
  }, [geoData]);

  useEffect(() => {
    fetchWeather();
  }, [geoData, fetchWeather]);

  if (!weatherData) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <p className="text-center text-gray-500">Loading weather data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white shadow-2xl overflow-hidden">
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/20">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">
              {weatherData?.name}
            </h1>

            <div className="text-4xl sm:text-6xl sm:hidden">
              {getWeatherIcon(weatherData.weather[0].main)}
            </div>
          </div>

          <p className="text-lg sm:text-xl opacity-90 mt-1">
            {weatherData.weather[0].main}
          </p>

          <p className="text-xs sm:text-sm mt-2 opacity-80">
            Updated: {new Date().toLocaleTimeString()}
          </p>
        </div>

        <div className="hidden sm:block text-6xl">
          {getWeatherIcon(weatherData.weather[0].main)}
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
          <div className="text-6xl sm:text-7xl font-bold">
            {Math.round(weatherData.main.temp)}
          </div>

          <p className="text-base sm:text-lg mt-1 sm:mt-2">
            Feels like {Math.round(weatherData.main.feels_like)}°C
          </p>
        </div>

        <div className="bg-white/10 p-3 sm:p-4 rounded-xl w-full sm:w-1/2">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">💧</span>

              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">
                  Humidity
                </p>

                <p className="text-sm sm:font-medium truncate">
                  {weatherData.main.humidity}%
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">💨</span>

              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">Wind</p>

                <p className="text-sm sm:font-medium truncate">

                  {weatherData.wind.speed} m/s
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">📊</span>
              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">
                  Pressure
                </p>
                <p className="text-sm sm:font-medium truncate">
                  {weatherData.main.pressure} gPa
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">👁️</span>

              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">
                  Visibility
                </p>
                
                <p className="text-sm sm:font-medium truncate">
                  {weatherData.visibility / 1000} km
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 p-4 sm:p-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
            <p className="text-xs sm:text-sm opacity-80">Min</p>

            <p className="text-base sm:text-xl font-bold">
              {Math.round(weatherData.main.temp_min)}°C
            </p>
          </div>

          <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
            <p className="text-xs sm:text-sm opacity-80">Max</p>

            <p className="text-base sm:text-xl font-bold">
              {Math.round(weatherData.main.temp_max)}°C
            </p>
          </div>

          <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
            <p className="text-xs sm:text-sm opacity-80">Clouds</p>

            <p className="text-base sm:text-xl font-bold">
              {weatherData.clouds.all}%
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center mb-2 sm:mb-0">
            <p className="text-xs sm:text-sm opacity-80">Sunrise</p>

            <p className="text-sm sm:text-lg font-medium">
              {new Date(weatherData.sys.sunrise * 1000)
                .toLocaleTimeString()
                .split(":")
                .slice(0, 2)
                .join(":")}
            </p>
          </div>

          <div className="w-full sm:w-1/3 h-1 my-2 sm:my-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-full"></div>

          <div className="text-center mt-2 sm:mt-0">
            <p className="text-xs sm:text-sm opacity-80">Sunset</p>

            <p className="text-sm sm:text-lg font-medium">
              {new Date(weatherData.sys.sunset * 1000)
                .toLocaleTimeString()
                .split(":")
                .slice(0, 2)
                .join(":")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
