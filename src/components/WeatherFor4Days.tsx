import { useCallback, useEffect, useState } from "react";
import type { WeatherForecastResponse } from "../interfaces/IWeatherData";
import { getWeather } from "../scripts/getWeather";

export function WeatherFor4Days(
  geoData: Readonly<{ lat: number; lon: number }>
) {
  const [weatherData, setWeatherData] =
    useState<WeatherForecastResponse | null>(null);

  const fetchWeather = useCallback(async () => {
    const weather = await getWeather(geoData, 4);

    console.log("Weather data:", weather);

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

  return (
    <div className="animate-fadeIn flex-col">
      <h3 className="text-xl font-bold text-black mb-4">Forecast for 4 days</h3>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Тут місце для карток прогнозу */}
        <div className="bg-black rounded-lg p-4 text-center">
          <p className="text-white/80">{weatherData?.list[0].main?.temp}°C</p>
        </div>

        <div className="bg-black rounded-lg p-4 text-center">
          <p className="text-white/80">Day 2</p>
        </div>

        <div className="bg-black rounded-lg p-4 text-center">
          <p className="text-white/80">Day 3</p>
        </div>

        <div className="bg-black rounded-lg p-4 text-center">
          <p className="text-white/80">Day 4</p>
        </div>
      </div>
    </div>
  );
}
