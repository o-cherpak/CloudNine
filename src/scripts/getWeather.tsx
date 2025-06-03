export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const myKey = "968dd7f47efc7262735c392d96f65181";

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric&lang=uk`
  );

  const weatherData = await weatherResponse.json();

  return weatherData;
}
