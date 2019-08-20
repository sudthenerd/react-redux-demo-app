import React from 'react';

const ToDoListView: React.FC<any> = ({onEdit, deleteToDo, todos}: any): any => {

    return (
        !!todos.length && <ul className="list-group d-flex justify-content-center align-items-center">
            { 
                todos.map((data: any, index: number) =>
                    <li className="list-group-item d-flex col-6" key={index}>
                        <span className="col">{data.name}</span>
                        <button className="btn btn-primary" onClick={() => {onEdit(data, index)}}>Edit</button>
                        <button className="btn btn-danger ml-4" onClick={() => {deleteToDo(index)}}>Delete</button>
                    </li>
                )
            }
        </ul>
    );
}

export default ToDoListView;