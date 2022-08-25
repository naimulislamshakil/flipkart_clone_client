import { useEffect } from "react";
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
  console.log(products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    errorHandeler(error);
  }

  return (
    <div className="mt-2">
      <div></div>
      <ProductCarousel products={products} />
    </div>
  );
};

export default Product;
