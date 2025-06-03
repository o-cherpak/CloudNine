import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CitiesCards } from "./CitiesCards";

export function GeoForm() {
  return (
    <div>
      <div className="flex p-2 items-center justify-center text-white ">
        <h1 className="hidden text-center font-medium text-2xl">
          Write your location
        </h1>

        <form
          action=""
          className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent p-2 transition-all duration-200"
        >
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
          />

          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded-xl h-8 hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faCrosshairs} />
          </button>
        </form>
      </div>

      <CitiesCards />
    </div>
  );
}
