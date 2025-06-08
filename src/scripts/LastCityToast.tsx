import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LastCityToast() {
  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");

    if (lastCity) {
      toast(() => (
        <div className="bg-white border border-gray-300 opacity-10 rounded shadow p-4 flex flex-col gap-2 w-80">
          <p className="text-base font-medium">
            Повернутись до міста <strong>"{lastCity}"</strong>?
          </p>
          <div className="flex justify-end gap-2">
            <button
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Так
            </button>
            
            <button className="bg-gray-400 text-white px-3 py-1 rounded">
              Ні
            </button>
          </div>
        </div>
      ));
    }
  }, []);

  return <ToastContainer position="top-center" />;
}
