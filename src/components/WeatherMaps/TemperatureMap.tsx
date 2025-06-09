import { useEffect, useRef } from "react";
import { Map, config, MapStyle } from "@maptiler/sdk";
import { TemperatureLayer, ColorRamp } from "@maptiler/weather";
import "@maptiler/sdk/dist/maptiler-sdk.css";

config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

export const TemperatureMap = (
  geoData: Readonly<{ lat: number; lon: number }>
) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      container: mapRef.current,
      style: MapStyle.DATAVIZ.DARK,
      center: [geoData.lon, geoData.lat],
      zoom: 5,
    });

    const tempLayer = new TemperatureLayer({
      opacity: 0.7,
      colorramp: ColorRamp.builtin.TEMPERATURE_2,
    });

    map.on("load", () => {
      map.addLayer(tempLayer);
    });

    return () => map.remove();
  }, [geoData.lon, geoData.lat]);

  return (
    <div ref={mapRef} className="w-full h-[90vh] md:h-[70vh] rounded-xl" />
  );
};
