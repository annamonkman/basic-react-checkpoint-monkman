import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [], totalQuantity: 0, wishlistIsVisible: false },
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.totalQuantity++;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
      } else {
        state.totalQuantity--;
        state.items = state.items.filter((item) => item.id !== newItem.id);
      }
    },
    toggleWishlist(state) {
      state.wishlistIsVisible = !state.wishlistIsVisible;
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
