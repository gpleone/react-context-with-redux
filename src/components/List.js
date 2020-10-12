import React, { useContext } from "react";
import Item from "./Item";
import ErrorBoundary from "./ErrorBoundary";
import { TodosContext } from "../context/TodosProvider";

const allFilter = (item) => item;
const completeFilter = (item) => item.completed;
const inProgressFilter = (item) => !item.completed;

const List = () => {
  const { todos, filter } = useContext(TodosContext);

  const filterFunctions = {
    all: allFilter,
    completed: completeFilter,
    inprogress: inProgressFilter
  };

  const filteredTodos = todos.filter(filterFunctions[filter]);

  return (
    <ErrorBoundary>
      <div className="">
        <h3 className="subtitle">TODOS (#{todos.length})</h3>
        <div>
          {filteredTodos.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default List;
