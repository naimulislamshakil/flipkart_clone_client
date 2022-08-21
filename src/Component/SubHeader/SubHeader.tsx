import { FC, useEffect } from "react";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { getHeader } from "../Redux/Slice/HeaderSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../Redux/TypeHook/HeaderTypeHook";
import HeaderCard from "./HeaderCard";

const SubHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { headers, error, isLoading } = useAppSelector(
    (state) => state.headers
  );

  useEffect(() => {
    dispatch(getHeader());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error);
  }
  return (
    <div className="flex justify-between shadow-md">
      {headers.map((header) => (
        <HeaderCard key={header._id} header={header}></HeaderCard>
      ))}
    </div>
  );
};

export default SubHeader;
