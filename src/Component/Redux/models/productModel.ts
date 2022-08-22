type Product = {
  url: string;
  detailUrl: string;
  title: {
    shortTitle: string;
    longTitle: string;
  };
  price: {
    mrp: number;
    cost: number;
    discount: string;
  };
  quantity: number;
  description: string;
  discount: string;
  tagline: string;
};

export default Product;
