import React, {useState} from 'react'
import s from './ToDos.module.sass';
import ToDoList from '../ToDoList';
import AddToDo from '../AddToDo';

export default function ToDos() {
  const [todo, setTodo] = useState([
    {
      id:1, 
      title: 'бег', 
      description:'не очень людю'
    },
    {
      id:2, 
      title: 'велосипед', 
      description:'очень людю'
    },
    {
      id:3, 
      title: 'лыжт', 
      description:'катался два раза'
    }
  ]);

  const addToDo = (id, title, description)=>{
    setTodo(prev => [...prev,  {id, title, description}]);
  };

  const deleteTodo = id => {
    setTodo(prev => prev.filter(t => t.id !== id));
  }
  return (
    <div className={s.todos}>
        <h1>Дела на сегодня!</h1>
        <p>Терпение и труд все, я устал!</p>
        <AddToDo addToDo={addToDo}/>
        <ToDoList todo={todo} deleteTodo={deleteTodo}/>
    </div>
  )
}
