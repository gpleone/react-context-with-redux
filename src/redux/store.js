import { createStore } from "redux";

const initialState = [
  { id: 0, title: "buy a new book", completed: false },
  { id: 1, title: "cook something for Mary", completed: false },
  { id: 2, title: "practice yoga", completed: false }
];

const handlers = {
  ADD: (state, action) => {
    return [
      ...state,
      { id: state.length, title: action.payload, completed: false }
    ];
  },
  REMOVE: (state, action) => {
    return state.filter((item) => item.id !== action.payload);
  },
  COMPLETE: (state, action) => {
    return state.map((item) => {
      return item.id === action.payload ? { ...item, completed: true } : item;
    });
  }
};

function todos(state = initialState, action) {
  const { type } = action;
  const f = handlers[type];
  return f ? f(state, action) : state;
}

export default createStore(todos);
