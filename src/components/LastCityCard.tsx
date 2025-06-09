import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LastCityCardProps = {
  cityName: string;
  onRemove: () => void;
  onClick: () => void;
};

export function LastCityCard({
  cityName,
  onRemove,
  onClick,
}: Readonly<LastCityCardProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative bg-white shadow-md rounded-md p-2 px-5 flex items-center justify-between
                 hover:bg-gray-200 hover:cursor-pointer transition-colors duration-200 text-sm sm:text-base
                 group"
    >
      <p className="truncate">{cityName}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();

          onRemove();
        }}
        className="absolute right-1 top-0 opacity-0 group-hover:opacity-100
                   text-gray-500 hover:text-red-600 hover:cursor-pointer transition-opacity duration-200"
        aria-label={`Remove ${cityName} from history`}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </button>
  );
}
