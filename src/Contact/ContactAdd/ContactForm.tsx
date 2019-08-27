import React from 'react'
import { Field, reduxForm } from 'redux-form';

let ContactForm: any = (props) => {
    const { handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
          <section className="d-flex flex-column col-6 py-2 text-secondary">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field className="form-control" name="firstName" component="input" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field className="form-control" name="lastName" component="input" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field className="form-control" name="email" component="input" type="email" />
            </div>
            <button type="submit" className="col-2 btn btn-primary">Submit</button>
          </section>
      </form>
    );
}

ContactForm = reduxForm({
  // a unique name for the form 
  form: 'contact'
})(ContactForm)


export default ContactForm;
