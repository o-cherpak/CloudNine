import { useState, useEffect } from "react";
import { LastCityCard } from "./LastCityCard";
import { ToastContainer } from "react-toastify";
import { notifySuccess } from "../scripts/notify";

type LastCitiesProps = {
  cityName: string;
  onCityClick: (city: string) => void;
};

export function LastCities({ cityName, onCityClick }: Readonly<LastCitiesProps>) {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const history = localStorage.getItem("lastCities");
    if (history) setHistory(JSON.parse(history));
  }, []);

  useEffect(() => {
    if (!cityName || cityName.trim() === "") return;

    setHistory((prev) => {
      const updatedHistory = [cityName, ...prev.filter((c) => c !== cityName)];

      if (updatedHistory.length > 5) updatedHistory.pop();

      localStorage.setItem("lastCities", JSON.stringify(updatedHistory));
      return updatedHistory;
    });

    notifySuccess(`City "${cityName}" added to history!`);
  }, [cityName]);

  const removeCity = (cityToRemove: string) => {
    setHistory((prev) => {
      const updated = prev.filter((city) => city !== cityToRemove);

      localStorage.setItem("lastCities", JSON.stringify(updated));
      return updated;
    });

    notifySuccess(`City "${cityToRemove}" removed from history!`);
  };

  return (
    <div className="p-4 flex flex-col bg-white rounded-lg shadow-md max-w-2xl mt-4 justify-self-center">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <h2 className="text-xl font-semibold mb-4 text-center">Search History</h2>
      <div className="grid grid-cols-2 sm:flex items-center gap-4 justify-center">
        {history.map((city) => (
          <LastCityCard
            cityName={city}
            key={city}
            onRemove={() => removeCity(city)}
            onClick={() => onCityClick(city)}
          />
        ))}
      </div>
    </div>
  );
}
