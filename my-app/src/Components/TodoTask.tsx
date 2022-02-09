import React from 'react';
import { ITask } from '../Interfaces';

interface props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: props) => {
    return (
    <div className='task'>
        <div className='content'>
            <span id='taskName'>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={() => {completeTask(task.taskName)}} >Complete</button>
    </div>

    )
}

export default TodoTask;
