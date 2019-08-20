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

        this.onEdit = this.onEdit.bind(this);
    }

    private onEdit(data: any, index) {
        data.index = index;
        this.props.editToDo(data);
        this.props.history.push('/todo/add');
    }

    public render() {
        return <ToDoListView
                onEdit = { this.onEdit }
                deleteToDo = { this.props.deleteToDo }
                todos = { this.props.todos } />
    }
}

const mapStateToProps = (state: any) => ({
    todos: state.toDo.list
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