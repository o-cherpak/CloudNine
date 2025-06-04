import type {
  WeatherData,
  WeatherForecastResponse,
} from "../interfaces/IWeatherData";

export async function getWeather(
  { lat, lon }: { lat: number; lon: number },
  days: 1 | 4 | 16
): Promise<WeatherData | WeatherForecastResponse> {
  const myKey = "968dd7f47efc7262735c392d96f65181";

  try {
    let url: string;
    
    switch (days) {
      case 1:
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric&lang=uk`;
        break;
      case 4:
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric&lang=uk&cnt=24`; // 24 timestamps (3 days)
        break;
      case 16:
        url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric&lang=uk&cnt=7`;
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
