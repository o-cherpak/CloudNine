import type {
  WeatherData,
  WeatherForecastResponse,
} from "../interfaces/IWeatherData";

export async function getWeather(
  { lat, lon }: { lat: number; lon: number },
  days: 1 | 4
): Promise<WeatherData | WeatherForecastResponse> {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  try {
    let url: string;
    switch (days) {
      case 1:
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=uk`;
        break;
      case 4:
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=uk&cnt=26`;
        break;
      default:
        throw new Error("Unsupported forecast duration");
    }

    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    throw error;
  }
}
