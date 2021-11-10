import { createStore } from "redux";

const defaultState = {
  modalState: false,
  selectedPlayer: "",
  lineup: [...Array(9)],
  rotation: [...Array(5)],
  bullpen: [...Array(6)],
  bench: [...Array(5)],
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
  if (action.type === "unselectPlayer") {
    return {
      ...state,
      selectedPlayer: "",
    };
  }
  if (action.type === "addPlayerToLineup") {
    const lineup = state.lineup;
    lineup[action.index] = action.player;
    return {
      ...state,
      lineup: lineup,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
