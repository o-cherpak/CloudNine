import { useEffect, useState } from "react";
import { getGeoByCity } from "../scripts/getGeo";
import { getWeather } from "../scripts/getWeather";
import type { WeatherData } from "../interfaces/IWeatherData";

export function PopularCityCard({ cityName }: Readonly<{ cityName: string }>) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeather = async () => {
    const geo = await getGeoByCity(cityName);
    const weather = await getWeather(geo);

    setWeatherData(weather);
  };

  useEffect(() => {
    fetchWeather();
  });

  return (
    <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="p-6 text-white">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🌆</span>

          <h2 className="text-xl font-bold">{cityName}</h2>
        </div>

        <p className="mt-2 opacity-90">
          {weatherData
            ? `${Math.round(weatherData.main.temp)}°C | feels like ${Math.round(weatherData.main.feels_like)}°C`
            : "Loading..."}
        </p>

        <p className="text-sm mt-1 opacity-80">
          {weatherData ? weatherData.condition : "Loading..."}
        </p>
      </div>
    </div>
  );
}
