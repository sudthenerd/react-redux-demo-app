import React from 'react';
import { connect } from 'react-redux';
// --------------------------------------------- //
import ToDoListView from './presentation/ToDoListView';
import { getToDos, deleteToDoItem, editToDoItem } from './middleware/ToDoListMiddleware';

class ToDoList extends React.Component<any, any> {
    constructor(props) {
        super(props);

        if (this.props.todos && !this.props.todos.length) {
            this.props.getToDos();
        }
    }

    public render() {
        return <ToDoListView {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    todos: state.toDo.list.todos
})

const mapDispatchToProps = (dispatch: any) => ({
    getToDos: () => dispatch(getToDos()),
    deleteToDo: (index: number) => dispatch(deleteToDoItem(index)),
    editToDo: (data: any) => dispatch(editToDoItem(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);