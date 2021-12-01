import { createStore } from "redux";

const defaultState = {
  modalState: false,
  selectedPlayer: "",
  selectedPlayerOnTeam: "",
  unselectPlayerInRotation: "",
  lineup: [...Array(9)],
  rotation: [...Array(5)],
  bullpen: [...Array(6)],
  bench: [...Array(5)],
  counter: 0,
};

const counterReducer = (state = defaultState, action) => {
  if (action.type === "increase") {
    let newCount = state.counter;
    newCount++;
    return {
      ...state,
      counter: newCount,
    };
  }
  if (action.type === "selectedPlayer") {
    return {
      ...state,
      selectedPlayer: action.selectedPlayer,
    };
  }
  if (action.type === "selectedPlayerOnTeam") {
    return {
      ...state,
      selectedPlayerOnTeam: {
        player: action.player,
        position: action.position,
        positionPlayer: action.positionPlayer,
      },
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
  if (action.type === "unselectPlayerOnTeam") {
    return {
      ...state,
      selectedPlayerOnTeam: "",
    };
  }

  if (action.type === "swapPlayersInLineup") {
    const lineup = state.lineup;
    lineup[state.selectedPlayerOnTeam.position] = action.player;
    lineup[action.position] = state.selectedPlayerOnTeam.player;

    return {
      ...state,
      lineup: [...lineup],
    };
  }
  if (action.type === "swapPlayersInRotation") {
    const rotation = state.rotation;
    rotation[state.selectedPlayerOnTeam.position] = action.player;
    rotation[action.position] = state.selectedPlayerOnTeam.player;

    return {
      ...state,
      rotation: [...rotation],
    };
  }

  if (action.type === "swapPlayersOnBench") {
    const bench = state.bench;
    bench[state.selectedPlayerOnTeam.position] = action.player;
    bench[action.position] = state.selectedPlayerOnTeam.player;

    return {
      ...state,
      bench: [...bench],
    };
  }

  if (action.type === "swapPlayersInBullpen") {
    const bullpen = state.bullpen;
    bullpen[state.selectedPlayerOnTeam.position] = action.player;
    bullpen[action.position] = state.selectedPlayerOnTeam.player;

    return {
      ...state,
      bullpen: [...bullpen],
    };
  }

  if (action.type === "addPlayerToLineup") {
    const lineup = state.lineup;
    lineup[action.index] = action.player;
    return {
      ...state,
      lineup: [...lineup],
    };
  }
  if (action.type === "addPlayerToRotation") {
    const rotation = state.rotation;
    rotation[action.index] = action.player;
    return {
      ...state,
      rotation: [...rotation],
    };
  }
  if (action.type === "addPlayerToBullpen") {
    const bullpen = state.bullpen;
    bullpen[action.index] = action.player;
    return {
      ...state,
      bullpen: [...bullpen],
    };
  }
  if (action.type === "addPlayerToBench") {
    const bench = state.bench;
    bench[action.index] = action.player;
    return {
      ...state,
      bench: [...bench],
    };
  }
  if (action.type === "resetLineup") {
    return {
      ...state,
      lineup: [...Array(9)],
    };
  }
  if (action.type === "resetRotation") {
    return {
      ...state,
      rotation: [...Array(5)],
    };
  }
  if (action.type === "resetBullpen") {
    return {
      ...state,
      bullpen: [...Array(6)],
    };
  }
  if (action.type === "resetBench") {
    return {
      ...state,
      bench: [...Array(5)],
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
