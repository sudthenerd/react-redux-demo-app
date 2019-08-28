import React from 'react';
import { connect } from 'react-redux';
// --------------------------------------------- //
import ContactForm from './ContactForm'
import { addContactDetail } from './middleware/ContactAddMiddleware';

class ContactAdd extends React.Component<any> {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

  public submit(values) {
    this.props.addContactDetail(values);
    console.log('called', this.props.stateForm, this.props.values);
  }

  render() {
      {console.log(this.props.values);}
    return <ContactForm onSubmit={this.submit} />
    // return <ContactForm onSubmit={this.submit} />
  }
}

const mapStateToProps = (state: any) => ({
    values: state.contact.contactDetail,
    stateForm: state
})

const mapDispatchToProps = (dispatch: any) => ({
    addContactDetail: (data: any) => dispatch(addContactDetail(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactAdd);