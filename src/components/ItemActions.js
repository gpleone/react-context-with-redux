import React, { useContext } from "react";
import { TodosContext } from "../context/TodosProvider";

const ItemActions = ({ id }) => {
  const { dispatch } = useContext(TodosContext);
  return (
    <div className="buttons">
      <button
        className="button is-danger is-small"
        onClick={() => dispatch({ type: "REMOVE", payload: id })}
      >
        remove
      </button>
      <button
        className="button is-success is-small"
        onClick={() => dispatch({ type: "COMPLETE", payload: id })}
      >
        toggle complete
      </button>
    </div>
  );
};

export default ItemActions;
