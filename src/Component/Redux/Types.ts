import Header from "./models/headerModel";

export interface HeaderType {
  headers: Header[];
  error: string | null;
  isLoading: boolean;
}
