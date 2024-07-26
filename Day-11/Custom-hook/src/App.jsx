import { useState,useEffect } from 'react'
import axios from 'axios';

function useTodos(){
  const [loading,setLoading] = useState(true);
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    axios.get("<https://sum-server.100xdevs.com/todos>")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      })
  },[])

  return {
    todos: todo,
    loading: loading
  }
}

function App() {

  const {todos,loading} = useTodos();

  if(loading){
    return <div>Loading...</div>
  }

  return (
   <>
   {todos.map(todo => <Track key={todo.id} todo={todo}/>)}
   </>
  )
}

function Track({todo}){
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
