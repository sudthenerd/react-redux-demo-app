import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { connect } from 'react-redux';
import { addToDoItem } from './middleware/ToDoAddMiddleware';
// ------------------------------------- //

class ToDoAdd extends React.Component<any, any> {
    constructor(props) {
        super(props);
        console.log(this.props.toDo);
    }

    public render() {
        return (
            <div>
              <Formik
                initialValues={{ todoName: (this.props.toDoItem && this.props.editMode) && this.props.toDoItem.name || ''}}
                validate={values => {
                    let errors: any = {};
                    if (!values.todoName) {
                        errors.todoName = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
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
                    this.props.history.push('/todo/list')
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="d-flex col-6 align-items-start px-0 py-2">
                        <div className="form-group col px-0">
                            <Field className="form-control" type="text" name="todoName" />
                            <ErrorMessage name="todoName" component="div" />
                        </div>
                        <button className="btn btn-primary ml-3" type="submit" disabled={isSubmitting}>
                            Add
                        </button>
                    </Form>
                )}
                </Formik>
            </div>
        )
    }
}

const mapStateToProps: any = (state: any) => ({
    todos: state.toDo.list.todos,
    toDoItem: state.toDo.toDoItem,
    editMode: state.toDo.editMode,
    toDo: state.toDo
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