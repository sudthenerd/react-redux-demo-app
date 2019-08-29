import React from 'react'
import { Field, reduxForm, reset } from 'redux-form';
import { addToDoItem } from '../../ToDo/ToDoAdd/middleware/ToDoAddMiddleware';
import { connect } from 'react-redux';

const onSubmit = (values, dispatch) => {
  console.log(values);
  addToDoItem(
    {
      index: 1, 
      name: values.firstName + ' ' + values.lastName + ' Completed Task'
    }
  )(dispatch);
  // dispatch(reset('contact'));
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
    <div className="form-group">
      <label>{label}</label>
      {render(input, label, rest)}
      { meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  </>

const RenderInput = createRenderer((input, label) => (
  <input { ...input } className="form-control" type="text" autoComplete="on" />
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

let ContactForm: React.FC<any> = (props: any, state: any) => {
  const { handleSubmit, valid, allState } = props;
  // console.log(allState)
  return (
    <form onSubmit={handleSubmit}>
        <section className="d-flex flex-column col-6 py-2 text-secondary">
          <Field className="form-control" name="firstName" label={'First Name'} component={RenderInput} />
          <Field className="form-control" name="lastName" label={'Last Name'} component={RenderInput} />
          <Field className="form-control" name="email" label={'Email'} component={RenderInput} />
          <Field className="form-control" name="famousThing" label={'Select Famous Thing'} component={RenderSelect}>
            <SelectItems items={['Bilimora D Great', 'Valsad a Bit', '1Rivet Super']}/>
          </Field>
          <button type="submit" className="col-3 btn btn-primary" 
            onClick={() => { window.setTimeout(() => {}, 500)}}>
              Submit
          </button>
        </section>
    </form>
  );
}

const mapStateToProps = (state: any) => ({
  // initialValues: {firstName: 'A', lastName: 'B', email: 'ab@gmail.com', famousThing: 'Bilimora D Great' },
  allState: state
});

// export default reduxForm({
//   // a unique name for the form 
//   form: 'contact',
//   onSubmit,
//   validate,
//   destroyOnUnmount: false,
//   initialValues: {firstName: 'A', lastName: 'B', email: 'ab@gmail.com', famousThing: 'Bilimora D Great' }
// })(ContactForm);

export default connect(mapStateToProps)(reduxForm
  (
    { 
      form: 'contact',
      onSubmit,
      validate,
      destroyOnUnmount: false
    }
  )(ContactForm))
