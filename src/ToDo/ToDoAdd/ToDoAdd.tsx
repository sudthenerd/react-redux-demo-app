import React from 'react';
import { connect } from 'react-redux';
// ------------------------------------- //
import { addToDoItem } from './middleware/ToDoAddMiddleware';
import ToDoAddView from './presentation/ToDoAddView';

class ToDoAdd extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            initialValues: { todoName: (this.props.toDoItem && this.props.editMode) && this.props.toDoItem.name || '' }
        }

        this.validateForm = this.validateForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    private validateForm(values: any) {
        let errors: any = {};

        if (!values.todoName) {
            errors.todoName = 'Required';
        }

        return errors;
    }

    private onSubmit(values, { setSubmitting, resetForm }) {
        const editMode: boolean = this.props && this.props.editMode;
        if (editMode) {
            this.props.addToDo({
                index: this.props.toDoItem.index,
                name: values.todoName,
                editMode: !!editMode
            });
        } else {
            this.props.addToDo({
                index:  this.props.todos.length,
                name: values.todoName,
            })
        }
        setSubmitting(false);
        resetForm();
        this.props.history.push('/todo/list')
    }

    public render() {
        return <ToDoAddView
                initialValues={ this.state.initialValues } 
                validateForm={ this.validateForm }
                onSubmit={ this.onSubmit } />
    }
}

const mapStateToProps: any = (state: any) => ({
    todos: state.toDo.list.todos,
    toDoItem: state.toDo.toDoItem,
    editMode: state.toDo.editMode
})

const mapDispatchToProps: any = (dispatch: any) => ({
    addToDo: (toDoItem: any) => dispatch(addToDoItem(toDoItem))
})

// const ToDoAdd: React.FC = () => {
//     return <h1>TO DO ADD</h1>
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoAdd);