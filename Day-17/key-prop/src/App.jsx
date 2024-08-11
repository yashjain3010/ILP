import React,{useState} from "react";

const TodoList = ({todos}) => (
  <ul>
    {todos.map(todo => 
    <li key={todo.id}>{todo.text}</li>
    )}
  </ul>
)

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" },
    { id: 3, text: "Deploy to production" },
  ]);

  const addTodo = () => {
    const newTodo = {id : todos.length + 1,text: 'new todo'}
    setTodos([...todos,newTodo]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      <TodoList todos={todos}/>
    </div>
  ) 
}

export default App;