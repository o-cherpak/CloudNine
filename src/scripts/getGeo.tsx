export async function getGeoByCity(cityName: string) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const geoResponse = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
  );
  const geoData = await geoResponse.json();

  const location = geoData[0];

  const { lat, lon } = location;
  return { lat, lon };
}
