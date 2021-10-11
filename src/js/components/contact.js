import React, { Component, Fragment } from "react";

import ContactForm from './contact_form/contactForm';
import MessageCompleteContactForm from './contact_form/successMessageComplete';

class ContactUs extends Component {
  constructor() {
    super();
    this.state={
      viewMode: 0

    }
  }

  submitForm(values) {
    this.setState(()=>({
      viewMode: values
    }));
   
  }

  render() {
    return (
        <Fragment>

        {this.state.viewMode ? ( <MessageCompleteContactForm/> ) : ( <ContactForm onFormSubmit={(e)=>this.submitForm(e)}/> )}


           

        </Fragment>
    );
  };
}

export default ContactUs;