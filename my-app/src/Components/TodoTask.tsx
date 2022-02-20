import React from 'react';
import { ITask } from '../Interfaces';

interface ITodoTask {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: ITodoTask) => {
    return (
    <div className='task'>
        <div className='content'>
            <span className='taskName'>{task.taskName}</span>
            <span className='duration'>{task.deadline}</span>
            <span>{task.description}</span>
        </div>
        <button onClick={() => {completeTask(task.taskName)}} >Complete</button>
    </div>

    )
}

export default TodoTask;
