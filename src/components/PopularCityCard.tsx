import { useCallback, useEffect, useState } from "react";
import { getGeoByCity } from "../scripts/getGeo";
import { getWeather } from "../scripts/getWeather";
import type { WeatherData } from "../interfaces/IWeatherData";
import { getWeatherBackground } from "../scripts/getWeatherBgAndIcon";

export function PopularCityCard({ cityName }: Readonly<{ cityName: string }>) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeather = useCallback(async () => {
    const geo = await getGeoByCity(cityName);

    if (geo) {
      const weather = await getWeather({ lat: geo.lat, lon: geo.lon }, 1);
      setWeatherData(weather as WeatherData);
    }
  }, [cityName]);

  useEffect(() => {
    fetchWeather();
  }, [cityName, fetchWeather]);

  return (
    <div
      className={`w-full rounded-xl p-4 text-white shadow-lg transition-all duration-300 ${getWeatherBackground(weatherData?.weather[0].main)}`}
    >
      <div className="flex items-center gap-3">
        {weatherData && (
          <img
            className="bg-black/10  rounded-2xl backdrop-blur-sm"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].main || ""}
          />
        )}

        <div>
          <h2 className="text-xl font-bold">{cityName}</h2>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            {weatherData ? weatherData.weather[0].main : "Loading..."}
          </h2>

          <p className="text-sm opacity-90">
            {weatherData
              ? `Humidity: ${weatherData.main.humidity}%`
              : "Loading..."}
          </p>
        </div>

        <div className="text-right">
          <p className="text-4xl font-bold">
            {weatherData ? `${Math.round(weatherData.main.temp)}°C` : "--"}
          </p>

          <p className="text-sm opacity-90">
            {weatherData
              ? `Feels like ${Math.round(weatherData.main.feels_like)}°C`
              : "Loading..."}
          </p>
        </div>
      </div>

      {weatherData && (
        <div className="mt-4 flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <span>⬆️ {Math.round(weatherData.main.temp_max)}°C</span>

            <span>⬇️ {Math.round(weatherData.main.temp_min)}°C</span>
          </div>

          <div>
            <span>🌬️ {weatherData.wind.speed} m/s</span>
          </div>
        </div>
      )}
    </div>
  );
}
