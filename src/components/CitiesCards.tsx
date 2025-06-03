import { PopularCityCard } from "./PopularCityCard";

export function CitiesCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6">
      <PopularCityCard cityName="Tokyo" />

      <PopularCityCard cityName="New York" />

      <PopularCityCard cityName="Paris" />

      <PopularCityCard cityName="London" />

      <PopularCityCard cityName="Sydney" />

      <PopularCityCard cityName="Lublin" />
    </div>
  );
}
