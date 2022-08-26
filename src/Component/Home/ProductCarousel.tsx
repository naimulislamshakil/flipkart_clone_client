import React from "react";
import Product from "../Redux/models/productModel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
  products: Product[];
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductCarousel = ({ products }: Props) => {
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        containerClass="carousel-container"
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
      >
        {products.map((product) => (
          <div className="card w-[350px] h-[400px] bg-base-100 shadow-xl">
            <figure>
              <img className="w-[150px]" src={product.url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title.shortTitle}</h2>
              <p>
                {product.description ? (
                  product.description.slice(0, 100)
                ) : (
                  <h2>N/A</h2>
                )}
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Learn More</button>
                <button className="btn text-white bg-amber-600">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
