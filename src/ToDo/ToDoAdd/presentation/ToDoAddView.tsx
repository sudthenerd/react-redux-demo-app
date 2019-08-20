import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// ------------------------------------- //

const ToDoAddView: React.FC<any> = (props: any) => {

    const renderForm = (isSubmitting: any) => {
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

    return (
        <div>
            <Formik
                initialValues = { props.initialValues }
                validate = { props.validateForm }
                onSubmit = { props.onSubmit }
                render={ ({ isSubmitting }) => renderForm(isSubmitting) } />
        </div>
    )
}

export default ToDoAddView;