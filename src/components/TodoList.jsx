import React from "react";

export default function TodoList({ lists, onDelete }) {
  return (
    <section>
      <ul>
        {lists.map((item) => (
          <li key={item.id}>
            {item.text}
            <button type="button" onClick={() => onDelete(item.id)}>Del</button>
          </li>
        ))}
      </ul>
    </section>
  );
}