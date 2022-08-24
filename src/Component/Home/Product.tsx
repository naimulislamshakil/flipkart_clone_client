import { useEffect } from "react";
import { toast } from "react-toastify";
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
    toast.error(error);
  }
  return (
    <div className="card shadow-lg">
      {products.map((product) => (
        <ProductCarousel key={product._id} product={product}></ProductCarousel>
      ))}
    </div>
  );
};

export default Product;
