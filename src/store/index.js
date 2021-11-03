import { createStore } from "redux";

const defaultState = {
  modalState: false,
  selectedPlayer: {},
};

const counterReducer = (state = defaultState, action) => {
  if (action.type === "selectedPlayer") {
    return {
      ...state,
      selectedPlayer: action.selectedPlayer,
    };
  }
  if (action.type === "closeModal") {
    return {
      ...state,
      modalState: false,
    };
  }
  if (action.type === "openModal") {
    return {
      ...state,
      modalState: true,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
