import { useState } from "react";
import { CurrentWeatherCar } from "./CurrentWeatherCar";
import { WeatherFor4Days } from "./WeatherFor4Days";
import { HourlyWeatherCard } from "./HourlyWeatherCard";

export function WeatherNavigation(
  geoData: Readonly<{ lat: number; lon: number }>
) {
  const [activeTab, setActiveTab] = useState<"now" | "1d" | "4d" | "16d">(
    "now"
  );

  const tabs = [
    { id: "now", label: "Now" },
    { id: "1d", label: "1 day" },
    { id: "4d", label: "4-5 days" },
  ];

  return (
    <div className="mt-6 w-full mx-auto">
      <div className="flex justify-center mb-6 w-full">
        <div className="w-full md:w-1/2 xl:1/3 justify-between md:justify-around inline-flex bg-gradient-to-br from-blue-500 to-indigo-600 backdrop-blur-md rounded-full p-1 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id as "now" | "1d" | "4d" | "16d")
              }
              className={`px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-100 hover:cursor-pointer font-medium to-blue-200 text-black shadow-md"
                  : "text-white hover:text-white hover:cursor-pointer font-medium hover:bg-white/25"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex xl:items-end xl:space-x-6 xl:justify-between sm:bg-gradient-to-br from-blue-400 to-indigo-700 rounded-2xl xl:p-10 sm:p-6 backdrop-blur-sm border border-white/10 shadow-xl">
        <div className="w-full">
          {activeTab === "now" && (
            <CurrentWeatherCar lat={geoData.lat} lon={geoData.lon} />
          )}

          {activeTab === "1d" && (
            <HourlyWeatherCard lat={geoData.lat} lon={geoData.lon} />
          )}

          {activeTab === "4d" && (
            <WeatherFor4Days lat={geoData.lat} lon={geoData.lon} />
          )}
        </div>

        {activeTab === "now" && (
          <img
            className="hidden xl:flex w-1/3 h-1/2"
            src="/images/undraw_weather-notification_5wuk.svg"
            alt=""
          />
        )}
      </div>
    </div>
  );
}
