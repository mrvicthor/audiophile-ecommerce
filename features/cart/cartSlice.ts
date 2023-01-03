import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../model";
import { RootState } from "../../redux/store";

type cartState = {
  cart: Product[];
};

type ProductSlug = string;

const initialState: cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingOrder = state.cart.find(
        (item) => item.slug === action.payload.slug
      );

      if (existingOrder) {
        existingOrder.quantity = existingOrder.quantity + 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<ProductSlug>) => {
      state.cart = state.cart.map((item) =>
        item.slug === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseQuantity: (state, action: PayloadAction<ProductSlug>) => {
      state.cart = state.cart.map((item) =>
        item.slug === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, emptyCart } =
  cartSlice.actions;

export const cart = (state: RootState) => state.cart.cart;

export const numberOfItemsInCart = (state: cartState) =>
  state.cart
    .map((items) => items.quantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

export const totalCost = (state: cartState) =>
  state.cart
    .map((item) => item.quantity * item.price)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

export default cartSlice.reducer;
