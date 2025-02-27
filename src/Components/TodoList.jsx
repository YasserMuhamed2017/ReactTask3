import React from "react";

const TodoList = ({tasks}) => {
    
    return (
        <div className="d-flex justify-content-center">
            <ul className="w-50 list-group justify-content-center mt-5">
            {
            tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between mb-3 bg-light"><strong>{task.title}</strong> {task.description}</li>
            ))
            }
            </ul>
        </div>
    );
}

export default TodoList