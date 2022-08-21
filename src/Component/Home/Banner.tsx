import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { getBanner } from "../Redux/Slice/BannerSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../Redux/TypeHook/HeaderTypeHook";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const dispatch = useAppDispatch();
  const { banners, error, isLoading } = useAppSelector(
    (state) => state.banners
  );

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error);
  }
  return (
    <div className="m-2">
      <Carousel responsive={responsive}>
        {banners.map((banner) => (
          <img key={banner._id} src={banner.url} alt="Banner"></img>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Banner;
