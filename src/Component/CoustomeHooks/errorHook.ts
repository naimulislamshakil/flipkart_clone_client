import { toast } from "react-toastify";

const errorHandeler = (error: string) => {
  toast.error(error);
};

export default errorHandeler;
