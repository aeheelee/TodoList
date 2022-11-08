import React from "react";

export default function AddTodo({ text, handleChange, onAdd }) {
  return (
    <form className="AddTodo">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
        // onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onAdd}>추가</button>
    </form>
  );
}