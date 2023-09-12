import React, {useState} from "react";

export default function App(){
  const[task, setTask] = useState([
    {id: 1, title: 'написать функцию arrow', completed: false},
  ])
  const [count, setCount] = useState(0)
  const[input, setInput] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  function todoCompleted (id) {
    setTask(task.filter(task => {
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task
    }))
  }


function removeTask(id){
  setTask(task.filter(task => task.id !== id))
}

function addTask(e){
  if(e.code === 'Enter' && input.trim() !== ''){
    setTask(task.concat([{id: Date.now(), title: input}]));
    setInput('')
  }
}





  return(
    <div className="container">
      <div>
        <button onClick={increment}>+</button>
          <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
      <input value={input} type="text" onKeyUpCapture={(e) => addTask(e)} onChange={(e) => setInput(e.target.value)}/>
      <div>
        {task && task.map(task => {
          return(
            <div className="taskwrapper" key={task.id}>
              <input type="checkbox" onClick={() =>todoCompleted(task.id)}/>
              <div className="taskTitle" style={{textDecoration: task.completed?'line-through':null}}>
                {task.title}
                </div>
              <div
              onClick={() => removeTask(task.id)}
              className="completed">&times;</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
