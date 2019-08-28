import React from 'react'
import { Field, reduxForm } from 'redux-form';

const onSubmit = values => {
  alert(JSON.stringify(values));
}

const validate = values => {
  const errors: any = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  return errors;
}

const createRenderer = render => ({ input, meta, label, ...rest }) => 
  <>
    <pre>{JSON.stringify(meta, null, 1)}</pre>
    <div className="form-group">
      <label>{label}</label>
      {render(input, label, rest)}
      { meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  </>

const RenderInput = createRenderer((input, label) => (
  <input { ...input } className="form-control" type="text" autoComplete="off" />
))

const RenderSelect = createRenderer((input, label, { children }) => 
  <select { ...input } className="form-control">
    { children }
  </select>
)

const SelectItems = ({items}) => (
  <>
  <option>Select Famous Thing</option>
    {
      items.map((popularThing, index) => (
        <option key={index} value={popularThing}>
          {popularThing}
        </option>
      ))
    }
  </>
)

const ContactForm: any = (props) => {
    const { handleSubmit, valid } = props;

    return (
      <form onSubmit={handleSubmit}>
          <section className="d-flex flex-column col-6 py-2 text-secondary">
            <Field className="form-control" name="firstName" label={'First Name'} component={RenderInput} />
            <Field className="form-control" name="lastName" label={'Last Name'} component={RenderInput} />
            <Field className="form-control" name="email" label={'Email'} component={RenderInput} />
            <Field className="form-control" name="famousThing" label={'Select Famous Thing'} component={RenderSelect}>
              <SelectItems items={['Bilimora D Great', 'Valsad a Bit', '1Rivet Super']}/>
            </Field>
            <button type="submit" disabled={ !valid } className="col-3 btn btn-primary">Submit</button>
          </section>
      </form>
    );
}

export default reduxForm({
  // a unique name for the form 
  form: 'contact',
  onSubmit,
  validate,
  destroyOnUnmount: false
})(ContactForm)
