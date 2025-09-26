import { useState } from "react";
import "./components.css";
import TodoList from "./todoList";

function TodoCreate() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const change = (e) => {
    setNewTodo(e.target.value);
  };

  const gonder = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  // Silme
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Güncelleme
  const handleEdit = (index) => {
    const yeniDeger = prompt("Yeni değer gir:", todos[index]);
    if (yeniDeger !== null && yeniDeger.trim() !== "") {
      const newTodos = [...todos];
      newTodos[index] = yeniDeger;
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <input
        value={newTodo}
        className="input"
        type="text"
        onChange={change}
      />
      <button className="button" onClick={gonder}>
        EKLE
      </button>

      {todos.map((t, index) => (
        <TodoList
          key={index}
          todo={t}
          onDelete={() => handleDelete(index)}
          onEdit={() => handleEdit(index)}
        />
      ))}
    </div>
  );
}

export default TodoCreate;
