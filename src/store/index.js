import { createStore } from "redux";

const counterReducer = (state = {}, action) => {
  if (action.type === "addPlayer") {
    return {
      ...state,
      selectedPlayer: (state.selectedPlayer = action.player),
    };
  }
};

const store = createStore(counterReducer);

export default store;
