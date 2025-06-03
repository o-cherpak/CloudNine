export async function getGeoByCity(cityName: string) {
  const myKey = "968dd7f47efc7262735c392d96f65181";

  const geoResponse = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${myKey}`
  );
  const geoData = await geoResponse.json();

  const location = geoData[0];

  const { lat, lon } = location;
  return { lat, lon };
}
