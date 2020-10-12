import React from "react";
import ItemActions from "./ItemActions";

const clock = "U+23F2";
const ok = "U+2714";
const Item = ({ data }) => {
  const cname = `level ${data.completed ? "completed" : ""}`;
  return (
    <div className={cname}>
      <div className="level-left">
        {`${data.completed ? "✔️" : "⏲️"}`} {data.title}
      </div>
      <div className="level-right">
        <ItemActions id={data.id} />
      </div>
    </div>
  );
};

export default Item;
