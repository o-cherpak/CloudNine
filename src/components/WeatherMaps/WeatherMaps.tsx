import { RainMap } from "./RainMap";
import {TemperatureMap} from "./TemperatureMap";

export function WeatherMaps(geoData: Readonly<{ lat: number; lon: number }>) {
  return (
    <div className="flex flex-col items-center md:flex-row gap-10 mt-10 px-4 py-6 rounded-xl text-black w-full h-[90vh] shadow-xl sm:mt-16 sm:rounded-2xl sm:px-6 sm:py-8">
      <RainMap lat={geoData.lat} lon={geoData.lon} />

      <TemperatureMap lat={geoData.lat} lon={geoData.lon} />
    </div>
  );
}
