import { FC, useEffect } from "react";
import { toast } from "react-toastify";
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
    toast.error(error);
  }

  const navbar = (
    <>
      {headers.map((header) => (
        <li key={header._id}>
          <img className="w-2/4" src={header.url} alt="" />
          <p>{header.text}</p>
        </li>
      ))}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between p-0">{navbar}</ul>
      </div>
    </div>
  );
};

export default SubHeader;
