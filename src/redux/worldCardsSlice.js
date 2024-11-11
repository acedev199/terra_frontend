import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  worldCards: [],
  visibleWorldCardModal: { id: null, visible: false },
  visibleRenameWorldModal: false,
};

const worldCardsSlice = createSlice({
  name: "worldCards",
  initialState,
  reducers: {
    addItem(state, action) {
      state.worldCards.push(action.payload);
    },
    removeItem(state, action) {
      state.worldCards = state.worldCards.filter((item) => item.id !== action.payload);
    },
    updateItem(state, action) {
      const { id, updatedItem } = action.payload;
      state.worldCards = state.worldCards.map((item) =>
        item.id == id
          ? {
            ...item,
            ...updatedItem,
            data: {
              ...item.data,
              ...updatedItem.data,
            }
          }
          : item
      );
    },
    showWorldCardModal(state, action) {
      state.visibleWorldCardModal = { ...state.visibleWorldCardModal, ...action.payload };
    },
    showRenameWorldModal(state, action) {
      state.visibleRenameWorldModal = action.payload
    }
  },
});

export const { addItem, removeItem, updateItem, showWorldCardModal, showRenameWorldModal, } = worldCardsSlice.actions;
export default worldCardsSlice.reducer;
