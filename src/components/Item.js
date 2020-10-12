import React from "react";
import ItemActions from "./ItemActions";

const Item = ({ data }) => {
  return (
    <div className="level">
      <div className="level-left">{data.title}</div>
      <div className="level-right">
        <ItemActions id={data.id} />
      </div>
    </div>
  );
};

export default Item;
