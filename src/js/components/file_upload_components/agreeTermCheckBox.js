import React from "react";
//https://codepen.io/tantata/pen/QGVMza
class AgreeTermCheckBox extends React.Component{
    constructor() {
      super();
      this.state = {isChecked: false};
      this.checkboxValidation = React.createRef();
      this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
    }
  
    handleChecked () {
        
      this.setState(()=>({
          isChecked: this.checkboxValidation.current.checked}
          ),
      console.log("handleChecked:11", this.checkboxValidation.current.checked));
      this.props.termCheckBox(this.checkboxValidation.current.checked);
      
    }
  
    render(){
      var txt;
      if (this.state.isChecked) {
        txt = 'checked'
      } else {
        txt = 'unchecked'
      }
      return (
        <div className="col-md-4 pull-md-right">
            <div className="agreeTermUse ">
                <input className="form-check-input" id="field_terms" type="checkbox" required name="terms" 
                        onChange={()=>this.handleChecked() } 
                        ref={this.checkboxValidation} />
            
            <span>I agree to the</span> <u><a href="https://policies.google.com/privacy?hl=en-US" > Terms of Use</a> </u> <span>and have read and understand the Privacy Policy </span> 
            </div>
        </div>
      );
    }
  }
  export default AgreeTermCheckBox;
  