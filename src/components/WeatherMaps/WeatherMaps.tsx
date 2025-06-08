import { RainMap } from "./RainMap";
import { TemperatureMap } from "./TemperatureMap";

export function WeatherMaps(geoData: Readonly<{ lat: number; lon: number }>) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-20 pb-4 sm:text-4xl">
        Weather Maps
      </h1>
      <p className="text-center text-gray-600 px-2 text-sm sm:text-base">
        View real-time rain and temperature data for your location.
      </p>

      <div className="flex pt-6 md:pt-0 flex-col items-center md:flex-row gap-10 px-4 pb-6 rounded-xl text-black w-full h-[90vh] shadow-xl sm:rounded-2xl sm:px-6 ">
        <RainMap lat={geoData.lat} lon={geoData.lon} />

        <TemperatureMap lat={geoData.lat} lon={geoData.lon} />
      </div>
    </div>
  );
}
