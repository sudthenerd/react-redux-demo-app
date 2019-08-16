import React from 'react';
// ----------------------------------- //
import ToDoRouting from './ToDoRouting';

class ToDo extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>TO DO APP</h1>
                <ToDoRouting />
            </div>
        )
    }
}

// const ToDo: React.FC = () => {
// }

export default ToDo;