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
                <h4 className="text-left text-secondary">TO DO APP</h4>
                <ToDoRouting />
            </div>
        )
    }
}

// const ToDo: React.FC = () => {
// }

export default ToDo;