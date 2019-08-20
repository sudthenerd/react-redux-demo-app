import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { connect } from 'react-redux';
// ------------------------------------- //
import { addToDoItem } from './middleware/ToDoAddMiddleware';

class ToDoAdd extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            initialValues: { todoName: (this.props.toDoItem && this.props.editMode) && this.props.toDoItem.name || '' }
        }
    }

    private validateForm(values: any) {
        let errors: any = {};

        if (!values.todoName) {
            errors.todoName = 'Required';
        }

        return errors;
    }

    private onSubmit(values, { setSubmitting, resetForm }) {
            const editMode: boolean = this.props.editMode;
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

    private renderForm(isSubmitting: any) {
        return (
            <Form className="d-flex col-6 align-items-start px-0 py-2">
                <div className="form-group col px-0">
                    <Field className="form-control" type="text" name="todoName" placeholder="Enter To Do Item..."/>
                    <ErrorMessage name="todoName" component="div" />
                </div>
                <button className="btn btn-primary ml-3" type="submit" disabled={isSubmitting}>
                    Add
                </button>
            </Form>
        );
    }

    public render() {
        return (
            <div>
              <Formik
                initialValues={this.state.initialValues}
                validate={this.validateForm.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
                render={({isSubmitting}) => this.renderForm(isSubmitting)} />
            </div>
        )
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