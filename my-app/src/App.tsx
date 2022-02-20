import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask'
import { ITask } from './Interfaces';

const taskInitialState = {taskName: "", deadline: 0, description: ""};

const App: FC = () => {
  const [task, setTask] = useState<ITask>(taskInitialState);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask({...task, [event.target.name]: event.target.value});
  };
  
  const addTask = (): void => {
    setTodoList([...todoList, task])
    setTask(taskInitialState);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className='inputContainer'>
        <input type="text" placeholder="Your task" name="taskName" value={task.taskName} onChange={handleChange} />
        <input type="number" placeholder="Deadline in days" name="deadline" value={task.deadline} onChange={handleChange} />
        <input type="text" placeholder="Description" name="description" value={task.description} onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
