import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function notifyError(message: string) {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export function notifySuccess(message: string) {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
