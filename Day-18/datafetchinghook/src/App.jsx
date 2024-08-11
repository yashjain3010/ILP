import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function useTodos(n){
  const [todos, setTodos] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://sum-server.100xdevs.com/todos")
        .then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error while fetching data", error);
          setLoading(false);
        });
    }, n * 1000);

    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error while fetching data", error);
        setLoading(false);
      });

    return () => clearInterval(intervalId);
  },[n]);

  return {todos,loading};
}

function App(){

  const {todos,loading} = useTodos(2);

  if(loading){
    return <div>loading....</div>
  }

  return (
    <>
    {todos.map(todo => <Track key={todo.id} todo={todo}/>)}
    </>
  )
}

const Track = ({todo}) => {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App;