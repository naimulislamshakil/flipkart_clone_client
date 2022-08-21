import Banner from "./models/bannerModel";
import Header from "./models/headerModel";

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
