import axios from "axios";
import { gameAdded } from "../reducer/gameReducer";

const action = {
  type: "gameAdded",
  payload: {
    url: "/api/games",
    method: "get",
    data: {},
    onSuccess: "gamesReceived",
    onError: "apiRequestFailed",
  },
};

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== "apiCallBegan") return next(action);

  next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9000/api/games",
      url,
      method,
      data,
    });

    dispatch(gameAdded(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default api;
