import { ADD, SUB, ADD_EVENT } from "../actions/actionsType";

const initialState = {
  date: new Date(),
  currentDate: new Date(),
  selectedDate: null,
  currentEvent: [],
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        date: action.payload,
      };
    case SUB:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case ADD_EVENT:
      return {
        ...state,
        currentEvent: action.payload,
      };
    default:
      return state;
  }
}
