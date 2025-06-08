import { useCallback, useEffect, useState } from "react";
import type {
  WeatherForecastResponse,
  GroupedWeatherData,
} from "../../interfaces/IWeatherData";
import { getWeather } from "../../scripts/getWeather";
import { SegmentedWeatherCard } from "./SegmentedWeatherCard";
import { groupByDate } from "../../scripts/getGroupedByDates";

export function WeatherFor4Days(
  geoData: Readonly<{ lat: number; lon: number }>
) {
  const [weatherData, setWeatherData] =
    useState<WeatherForecastResponse | null>(null);

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

  if (weatherData) {
    groupedData = groupByDate(weatherData.list);
  }

  const dates = Object.keys(groupedData);

  return (
    <div className="animate-fadeIn flex-col">
      <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4`}>
        {dates.map((date) => (
          <SegmentedWeatherCard
            key={date}
            date={date}
            forecasts={groupedData[date]}
          />
        ))}
      </div>
    </div>
  );
}
