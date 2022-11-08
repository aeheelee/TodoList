import React, { useState, useRef } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todo, setTodo] = useState('');
  const [lists, setLists] = useState([
    {
      id: 1,
      text: "React 공부하기"
    },
    {
      id: 2,
      text: "빨래하기"
    },
    {
      id: 3,
      text: "운동하기"
    },
    {
      id: 4,
      text: "봄이 산책시키기"
    }
  ]);

  const onChange = (e) => setTodo(e.target.value);

  const nextId = useRef(5);
  const handleAdd = () => {
    const list = {
      id: nextId.current,
      text: todo
    };
    // setLists(lists.concat(list)); //새배열

    setLists([...lists, list]);
    nextId.current++;//1씩 추가
    setTodo(''); //초기화
  }

  const handleDelete = (id) => {
    setLists(lists.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <AddTodo text={todo} handleChange={onChange} onAdd={handleAdd} />
      <TodoList lists={lists} onDelete={handleDelete} />
    </>
  );
}