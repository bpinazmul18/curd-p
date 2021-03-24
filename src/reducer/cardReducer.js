const { createSlice } = require("@reduxjs/toolkit");

let lastId = 0;

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    cardAdded: (card, action) => {
      card.push({
        id: ++lastId,
        title: action.payload.title,
        cover: action.payload.cover,
      });
    },
  },
});

export const { cardAdded } = cardSlice.actions;
export default cardSlice.reducer;
