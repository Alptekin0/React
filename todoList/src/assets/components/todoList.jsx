import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

function TodoList({ todo, onDelete, onEdit }) {
  return (
    <div className="todoListContainer">
      <output className="output">
        <p>{todo}</p>
        <div className="icons">
          <FaPencil className="pencil" onClick={onEdit} />
          <FaTrash className="trash" onClick={onDelete} />
        </div>
      </output>
    </div>
  );
}

export default TodoList;
