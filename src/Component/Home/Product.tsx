import { useEffect } from "react";
import Countdown from "react-countdown";
import errorHandeler from "../CoustomeHooks/errorHook";

import Loading from "../Loading/Loading";
import { getProduct } from "../Redux/Slice/ProductSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../Redux/TypeHook/HeaderTypeHook";
import ProductCarousel from "./ProductCarousel";

const Product = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    errorHandeler(error);
  }

  interface Parameter {
    hours: number;
    minutes: number;
    seconds: number;
  }

  // // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds }: Parameter) => {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  return (
    <div className=" card shadow-lg mt-2">
      <div className="flex justify-between p-5 h-20">
        <div className="flex items-center">
          <h5 className="mr-3">Deal of the Day </h5>
          <div className="flex items-center">
            <img
              className="mr-2 w-6"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt=""
            ></img>
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </div>
        </div>
        <div>
          <button className="btn btn-outline btn-accent p-3">View All</button>
        </div>
      </div>
      <ProductCarousel products={products} />
    </div>
  );
};

export default Product;
