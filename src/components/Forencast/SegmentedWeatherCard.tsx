import type { ForecastItem } from "../../interfaces/IWeatherData";

interface SegmentedWeatherCardProps {
  date: string;
  forecasts: ForecastItem[];
}

export function SegmentedWeatherCard({
  date,
  forecasts,
}: Readonly<SegmentedWeatherCardProps>) {
  const currentDate = new Date().toISOString().split("T")[0];

  function isToday(date: string): boolean {
    return date === currentDate;
  }

  return (
    <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-lg p-4 text-center backdrop-blur-sm max-w-md mx-auto w-full shadow-lg">
      <p className="text-white font-medium text-lg mb-4 md:mb-5">
        {isToday(date)
          ? "Today"
          : new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
      </p>

      <div className="space-y-3">
        {forecasts.map((forecast) => (
          <div
            key={forecast.dt}
            className="flex hover:scale-110 duration-300 ease items-center justify-between bg-blue-600 rounded-lg p-3"
          >
            <span className="text-white font-medium text-sm md:text-base w-1/4">
              {new Date(forecast.dt * 1000).toLocaleTimeString("uk-UA", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>

            <span className="text-white font-bold text-lg md:text-xl w-1/2">
              {Math.round(forecast.main.temp)}°C
            </span>

            <div className="flex items-center justify-end w-2/4">
              <span className="text-white text-xs md:text-sm text-right">
                {forecast.weather[0].main}
              </span>

              {forecast.weather[0].icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                  className="w-8 h-8 ml-2"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
