import React, { Component, Fragment } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
        contactInfo:{
          firstName: '',
          email: '',
          subject: '',
          comment: ''
        },
        validationErrors: {
          firstName: '',
          email: ''
        },
        viewMode: '',
    }
  }
  handleChange(event){
      event.persist();
      event.preventDefault();
      const { name, value} = event.target;
      const contactInfo = this.state.contactInfo;
      let validationErrors = this.state.validationErrors;
      const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

      switch(name){
          case 'firstName':
              validationErrors.firstName = value.length < 0 ? "Please enter your name" : '';
              contactInfo.firstName = value;
              break;
          case 'email': 
              validationErrors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
              contactInfo.email = value;
              break;
          case 'subject': 
              contactInfo.subject = value ;
              break;
          case 'comment': 
              contactInfo.comment = value ;
              break;
          default:
              break;
      }
      this.setState(()=>({
          validationErrors, contactInfo
      }), ()=> {
          console.log("errors: ",validationErrors)
      })
  }
  async onSubmitForm(event) {
        const {firstName, email} = this.state.contactInfo;
        console.log("* Params:  ", firstName, email); 
        if(firstName && email){
            try {
                const configParams = {
                        method: "POST",
                        body: JSON.stringify(this.state.contactInfo),
                        credentials: 'same-origin',
                        headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                    'Accept': 'application/json'
                                }  
                        };
                const url = 'http://localhost:9999/contact';
                const response = await fetch(url, configParams);
                
                if(response.ok) 
                {
                        this.setState(()=>({
                            viewMode: response.ok
                        }),()=>{
                            this.props.onFormSubmit(response.ok);
                        });

                        console.log("Post request complete: ", response);
                        
                }
            } catch (error) {
            console.log(`Something went wrong: ${error}`);
            
            }
        }
        else{
            console.log(`Something went wrong: Empty Properties Contact information`);
        }

      }

  render() {
    console.log("render  : ", this.state.viewMode);
    return (
        <Fragment>
            <div className="border border-white container p-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                        <h4 className="panel-title" >
                            <span className="glyphicon glyphicon-info-sign">Any questions? Feel free to contact us!</span> 
                        </h4>
                        <label >What are you interested in? How can we help you? What can we help you with?</label> 
                        <p>Send us your comment, question or suggestion, or make a request. We’ll be in touch as soon as we can.</p>
                        <p>Tell us what you think.</p>
                        <p>What else would you like to see </p>
                  </div>
                    <form  method="post" acceptCharset="utf-8" onSubmit={(e)=>{this.handleSubmit(e)}}>
                      <div className="modal-body" >
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 pding-btm" >
                              <label >First Name</label>
                                  <input className="form-control" type="text" name="firstName" placeholder="FirstName" required="" 
                                        onChange={(e)=>this.handleChange(e)} />
                              </div>
                             {/*  <div className="col-lg-6 col-md-6 col-sm-6 pding-btm" >
                                  <label >Last Name</label>
                                  <input className="form-control" type="text" name="lastName" placeholder="LastName"  required=""
                                        onChange={(e)=>this.handleChange(e)} />
                              </div> */}
                          </div>
                          <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 pding-btm" >
                              <label >Email address</label>
                                  <input className="form-control" type="text" name="email" placeholder="E-Mail" required=""
                                          onChange={(e)=>this.handleChange(e)}/>
                              </div>
                          </div>
                          <div className="row">
                            {/* <div className="input-group mt-3 mb-3">
                                    <div className="input-group-prepend">
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                                        Dropdown button
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Feedback </a>
                                            <a className="dropdown-item" href="#">Add a tip </a>
                                            <a className="dropdown-item" href="#">What else would you like to see  </a>
                                            <a className="dropdown-item" href="#">Other </a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username"/>
                            </div> */}
                              <div className="col-lg-12 col-md-12 col-sm-12 pding-btm" >
                                <input className="form-control" type="text" name="subject" placeholder="Subject" required=""
                                          onChange={(e)=>this.handleChange(e)} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                  <textarea  className="form-control" name="comment" placeholder="Message..." rows="6" required=""
                                            onChange={(e)=>this.handleChange(e)}></textarea>
                              </div>
                          </div>
                      </div>  
                      <div className="panel-footer" >
                          <button type="button" className="btn btn-primary form-control form-control-lg" onClick={()=>this.onSubmitForm()} >Submit</button>
                      </div>
                  </form>
                </div>
            </div>
        </Fragment>
    );
  }
}
export default ContactForm;