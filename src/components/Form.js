import React, { useContext, useRef } from "react";
import { TodosContext } from "../context/TodosProvider";

const Form = () => {
  const inputField = useRef(null);
  const { dispatch } = useContext(TodosContext);
  return (
    <div className="form">
      <div className="field">
        <div className="control">
          <input
            ref={inputField}
            className="input is-info"
            type="text"
            placeholder="Primary input"
          />
        </div>
      </div>
      <div className="">
        <button
          className="is-info button"
          onClick={() =>
            dispatch({ type: "ADD", payload: inputField.current.value })
          }
        >
          add todo
        </button>
      </div>
    </div>
  );
};

export default Form;
