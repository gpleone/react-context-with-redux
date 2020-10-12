import React, { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodosContext = createContext({
  todos: [],
  dispatch: () => {},
  filter: "all",
  setFilter: () => {}
});

const TodosProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(todos);

  return (
    <TodosContext.Provider value={{ filter, todos, dispatch, setFilter }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
