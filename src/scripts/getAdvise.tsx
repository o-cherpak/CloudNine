export function getAdvise(weatherCondition: string | undefined): string {
  switch (weatherCondition?.toLowerCase()) {
    case "clear":
      return "It's a beautiful day! Enjoy the sunshine.";
    case "rain":
      return "Don't forget your umbrella!";
    case "clouds":
      return "It might be a bit gloomy, but it's still a good day.";
    case "snow":
      return "Perfect weather for building a snowman!";
    case "thunderstorm":
      return "Stay indoors and stay safe during the storm.";
    default:
      return "Weather is unpredictable, stay prepared for anything!";
  }
}
