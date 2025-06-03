export const getWeatherBackground = (weatherCondition: string | undefined) => {
  switch (weatherCondition?.toLowerCase()) {
    case "clear":
      return "bg-gradient-to-br from-yellow-400 to-orange-500";
    case "rain":
      return "bg-gradient-to-br from-blue-700 to-gray-600";
    case "clouds":
      return "bg-gradient-to-br from-gray-600 to-gray-700";
    case "snow":
      return "bg-gradient-to-br from-blue-300 to-blue-400";
    case "thunderstorm":
      return "bg-gradient-to-br from-purple-800 to-gray-900";
    default:
      return "bg-gradient-to-br from-blue-700 to-indigo-800";
  }
};

export const getWeatherIcon = (weatherCondition: string) => {
  switch (weatherCondition?.toLowerCase()) {
    case "clear":
      return "☀️";
    case "rain":
      return "🌧️";
    case "clouds":
      return "☁️";
    case "snow":
      return "❄️";
    case "thunderstorm":
      return "⛈️";
    default:
      return "🌆";
  }
};
