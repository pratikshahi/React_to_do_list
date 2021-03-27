import React, { useState } from "react";

function TodoLIst(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.todoItem}</li>
    </div>
  );
}
export default TodoLIst;
