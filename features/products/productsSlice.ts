import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../model";
import { data } from "../../data";
import { RootState } from "../../app/store";

interface ProductState {
  products: Product[];
}

type ProductSlug = string;

const initialState: ProductState = {
  products: data,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseOrderQuantityByOne: (
      state: ProductState,
      action: PayloadAction<ProductSlug>
    ) => {
      state.products = state.products.map((product) =>
        product.slug === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseOrderQuantityByOne: (
      state: ProductState,
      action: PayloadAction<ProductSlug>
    ) => {
      state.products = state.products.map((product) =>
        product.slug === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    },
  },
});

export const { increaseOrderQuantityByOne, decreaseOrderQuantityByOne } =
  productsSlice.actions;

export const selectedProducts = (state: RootState) => state.products.products;
export default productsSlice.reducer;
