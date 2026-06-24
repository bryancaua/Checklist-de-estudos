import { useState } from "react";
import ToDoContext from "./ToDoContext";

export function ToDoProvider({children}) {
  const [todos, setToDos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);


  const addToDo = (formData) => {
    const description = formData.get("description");

    setToDos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setToDos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setToDos((prevState) => {
      return prevState.filter((t) => t.id != todo.id); //filtra todos os To Do diferente desse (o selecionado, o atual) e assim não excluí, mas filtra uma nova lista sem esse
    });
  };

  return <ToDoContext value={{
    todos,
    addToDo,
    toggleTodoCompleted,
    deleteTodo
  }}>
    {children}
    </ToDoContext>;
}
