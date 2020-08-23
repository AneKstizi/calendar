import { ADD, SUB, ADD_EVENT } from "./actionsType";

export function add(date) {
  return {
    type: ADD,
    payload: date,
  };
}

export function selectedDate(date) {
  return {
    type: SUB,
    payload: date,
  };
}

export function addEvent(event) {
  return {
    type: ADD_EVENT,
    payload: event,
  };
}
