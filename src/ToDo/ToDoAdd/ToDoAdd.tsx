import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// ------------------------------------- //

class ToDoAdd extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
              <Formik
                initialValues={{ todoName: ''}}
                validate={values => {
                    let errors: any = {};
                    if (!values.todoName) {
                        errors.todoName = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('values', values);
                    setSubmitting(false);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="d-flex col-8 align-items-start px-0 py-2">
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

// const ToDoAdd: React.FC = () => {
//     return <h1>TO DO ADD</h1>
// }

export default ToDoAdd;