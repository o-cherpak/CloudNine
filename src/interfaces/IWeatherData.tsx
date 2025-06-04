export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    [key: string]: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherForecastResponse {
  cod: string; // Internal parameter
  message: string | number; // Internal parameter
  cnt: number; // Number of timestamps returned
  list: ForecastItem[];
  city: CityInfo;
}

export interface ForecastItem {
  dt: number; // Time of data forecasted, Unix UTC
  main: {
    temp: number; // Temperature (Kelvin by default)
    feels_like: number; // Human perception of temperature
    temp_min: number; // Minimum temperature
    temp_max: number; // Maximum temperature
    pressure: number; // Atmospheric pressure (hPa)
    sea_level?: number; // Atmospheric pressure at sea level (hPa)
    grnd_level?: number; // Atmospheric pressure at ground level (hPa)
    humidity: number; // Humidity percentage
    temp_kf?: number; // Internal parameter
  };
  weather: WeatherCondition[];
  clouds: {
    all: number; // Cloudiness percentage
  };
  wind: {
    speed: number; // Wind speed (m/s by default)
    deg: number; // Wind direction in degrees
    gust?: number; // Wind gust speed
  };
  rain?: {
    "1h": number; // Rain volume for last hour (mm)
    "3h"?: number; // Rain volume for last 3 hours (mm)
  };
  snow?: {
    "1h": number; // Snow volume for last hour (mm)
    "3h"?: number; // Snow volume for last 3 hours (mm)
  };
  visibility?: number; // Average visibility in meters (max 10km)
  pop?: number; // Probability of precipitation (0-1)
  sys: {
    pod: "d" | "n"; // Part of day (d=day, n=night)
  };
  dt_txt: string; // Forecast time in ISO format
}

interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface GroupedWeatherData {
  [date: string]: ForecastItem[];
}
