import { useState } from 'react'
import './App.css'
import TodoCreate from './assets/components/todoCreate.jsx'
import TodoList from './assets/components/todoList.jsx'

function App() {

  const [todos, setTodos] = useState([]);


  return (
    <div className='container'>

      <div>
        <h1>TODO LİST</h1>
      </div>

      <div>  {/* todoCreate Component */}

        <TodoCreate todos={todos} setTodos={setTodos} />

      </div>

    </div>
  )
}

export default App