import React, { useContext } from "react";
import { TodosContext } from "../context/TodosProvider";

const Actions = () => {
  const { setFilter } = useContext(TodosContext);
  return (
    <div className="actions buttons">
      <button
        className="is-info button is-small"
        onClick={() => setFilter("all")}
      >
        all
      </button>
      <button
        className="is-info button is-small"
        onClick={() => setFilter("inprogress")}
      >
        in progress
      </button>
      <button
        className="is-info button is-small"
        onClick={() => setFilter("completed")}
      >
        completed
      </button>
    </div>
  );
};

export default Actions;
