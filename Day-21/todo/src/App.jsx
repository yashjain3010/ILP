import { useState } from "react";
import ParentComponent from "./component/parentComponent";

const TodoList = ({todos}) => (
  <ul>
    {
    todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
)

const App = () => {
  const [todos, setTodos] = useState([
    {id:1,text: 'Learn React'},
    {id:2,text: 'Learn about keys and map'},
    {id:3,text: 'Now Deep Dive into it'},
  ]);

  const addTodo = (() => {
    const newTodo = {id: todos.length+1,text: 'New Todo'};
    setTodos([...todos,newTodo]);
  })

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      <TodoList todos={todos}/>
      <ParentComponent />
    </div>
  )
}

export default App;