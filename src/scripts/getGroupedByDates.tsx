import type {
  ForecastItem,
  GroupedWeatherData,
} from "../interfaces/IWeatherData";

export const groupByDate = (list: ForecastItem[]): GroupedWeatherData => {
  return list.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(item);
    return acc;
  }, {} as GroupedWeatherData);
};
