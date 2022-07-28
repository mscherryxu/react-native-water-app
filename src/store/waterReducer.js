// set goal of water intake
const SET_GOAL = 'SET_GOAL';

export const setGoal = (waterGoal) => {
  return {
    type: SET_GOAL,
    waterGoal,
  };
};

// update consumption
const UPDATE_CONSUMPTION = 'UPDATE_CONSUMPTION';

export const updateConsumption = (adjustedWater) => {
  return {
    type: UPDATE_CONSUMPTION,
    adjustedWater,
  };
};

// reset consumption
const RESET = 'RESET';

export const resetGoal = (newGoal) => {
  return {
    type: RESET_GOAL,
    newGoal,
  };
};

const initialState = {
  waterGoal: 8,
  waterProgress: 0,
};

export default waterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOAL:
      return { ...state, waterGoal: action.waterGoal };
    case UPDATE_CONSUMPTION:
      return { ...state, waterProgress: action.adjustedWater };
    case RESET:
      return { ...state, waterProgress: 0 };
    default:
      return state;
  }
};
