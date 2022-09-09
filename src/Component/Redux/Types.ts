import UserArray from "./models/acknowledged";
import Banner from "./models/bannerModel";
import Header from "./models/headerModel";
import Product from "./models/productModel";

export interface HeaderType {
  headers: Header[];
  error: string | null;
  isLoading: boolean;
}

export interface BannerType {
  banners: Banner[];
  error: string | null;
  isLoading: boolean;
}

export interface ProductType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export interface CreateUser {
  message?: UserArray
  isLoading: boolean;
  error: string | null;
}

export interface UserInfo{
  firstName:string,
        lastName: string,
        email: string,
        password:string
}

