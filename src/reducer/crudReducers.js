const { createSlice } = require("@reduxjs/toolkit");

let lastId = 0;

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    cardAdded: (card, action) => {
      card.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { cardAdded } = cardSlice.actions;
export default cardSlice.reducer;
