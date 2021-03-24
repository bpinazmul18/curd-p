const { createSlice } = require("@reduxjs/toolkit");

let lastId = 0;
const initialState = {
  games: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    gameAdded: (game, action) => {
      game.games.push({
        id: ++lastId,
        title: action.payload.title,
        cover: action.payload.cover,
      });
    },
  },
});

export const { gameAdded } = cardSlice.actions;
export default cardSlice.reducer;
