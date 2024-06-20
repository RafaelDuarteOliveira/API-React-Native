import { Product } from "./digimon";

export type StackParamList = {
  Home: undefined;
  Details: {
    product: Product;
  };
};
