import { initialState } from "./initialStace";
import {
  ADDED,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...state,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETE:
      return state.filter((todo) => !todo.completed);
    default:
      break;
  }
};

export default reducer;