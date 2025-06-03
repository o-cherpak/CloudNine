export function CurrentWeatherCar() {
  return (
    <div className="mt-10 max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white shadow-2xl overflow-hidden">
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/20">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">Selected City</h1>
            <div className="text-4xl sm:text-6xl sm:hidden">🌤️</div>
          </div>

          <p className="text-lg sm:text-xl opacity-90 mt-1">
            Weather description
          </p>

          <p className="text-xs sm:text-sm mt-2 opacity-80">
            Updated: {new Date().toLocaleTimeString()}
          </p>
        </div>

        <div className="hidden sm:block text-6xl">🌤️</div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
          <div className="text-6xl sm:text-7xl font-bold">24°C</div>
          <p className="text-base sm:text-lg mt-1 sm:mt-2">Feels like 26°C</p>
        </div>

        <div className="bg-white/10 p-3 sm:p-4 rounded-xl w-full sm:w-1/2">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">💧</span>
              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">
                  Humidity
                </p>
                <p className="text-sm sm:font-medium truncate">65%</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">💨</span>
              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">Wind</p>
                <p className="text-sm sm:font-medium truncate">4.2 м/с</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">📊</span>
              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">
                  Pressure
                </p>
                <p className="text-sm sm:font-medium truncate">1013 гПа</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">👁️</span>
              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm opacity-80 truncate">
                  Visibility
                </p>
                <p className="text-sm sm:font-medium truncate">10 км</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 p-4 sm:p-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
            <p className="text-xs sm:text-sm opacity-80">Min</p>

            <p className="text-base sm:text-xl font-bold">18°C</p>
          </div>

          <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
            <p className="text-xs sm:text-sm opacity-80">Max</p>

            <p className="text-base sm:text-xl font-bold">28°C</p>
          </div>

          <div className="text-center p-2 sm:p-3 bg-white/10 rounded-lg">
            <p className="text-xs sm:text-sm opacity-80">Clouds</p>

            <p className="text-base sm:text-xl font-bold">20%</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center mb-2 sm:mb-0">
            <p className="text-xs sm:text-sm opacity-80">Sunrise</p>

            <p className="text-sm sm:text-lg font-medium">06:24</p>
          </div>

          <div className="w-full sm:w-1/3 h-1 my-2 sm:my-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-full"></div>

          <div className="text-center mt-2 sm:mt-0">
            <p className="text-xs sm:text-sm opacity-80">Sunset</p>
            
            <p className="text-sm sm:text-lg font-medium">20:45</p>
          </div>
        </div>
      </div>
    </div>
  );
}
