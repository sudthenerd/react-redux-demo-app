import React from 'react';
import { connect } from 'react-redux';
// --------------------------------------------- //
import ContactForm from './ContactForm'
import { addContactDetail } from './middleware/ContactAddMiddleware';

class ContactAdd extends React.Component {

  public submit(values) {
    // this.props.addContactDetail(values);
  }

  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}

const mapStateToProps = (state: any) => ({
    values: state.contact.contactDetail
})

const mapDispatchToProps = (dispatch: any) => ({
    addContactDetail: (data: any) => dispatch(addContactDetail(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactAdd);