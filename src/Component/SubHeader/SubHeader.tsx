import { FC, useEffect } from "react";
import Loading from "../Loading/Loading";
import { getHeader } from "../Redux/Slice/HeaderSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../Redux/TypeHook/HeaderTypeHook";

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
    console.log(error);
  }
  return (
    <div>
      <h2>jhufkjdfhi</h2>
      {headers.map((header) => (
        <li key={header._id}>{header.text}</li>
      ))}
    </div>
  );
};

export default SubHeader;
