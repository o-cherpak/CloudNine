import React, { useEffect, useRef } from "react";
import { Map, config, MapStyle } from "@maptiler/sdk";
import { PrecipitationLayer, ColorRamp } from "@maptiler/weather";
import "@maptiler/sdk/dist/maptiler-sdk.css";

config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

export const RainMap = ({ lat, lon }: { lat: number; lon: number }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      container: mapRef.current,
      style: MapStyle.DATAVIZ.DARK,
      center: [lon, lat],
      zoom: 6,
    });

    const precipLayer = new PrecipitationLayer({
      opacity: 0.6,
      colorramp: ColorRamp.builtin.PRECIPITATION,
    });

    map.on("load", () => {
      map.addLayer(precipLayer);
    });

    return () => map.remove();
  }, [lat, lon]);

  return <div ref={mapRef} className="w-full h-[70vh] rounded-xl" />;
};
