import React, { Component, Fragment } from "react";
import UploadFile from './file_upload_components/uploadFile';
import AgreeTermCheckBox from './file_upload_components/agreeTermCheckBox';
import ChooseFile from './file_upload_components/chooseFile'

class FileHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
          file: '',
          checkBox: false,
          captureOutputResults: '',
          chooseValidMassege:{
            color:'#fff',
            displayMode:'none', 
            indicateMassege:''
          },
          loaderState:{
            loaderDisplay:"none",
            message: "Please upload file"
          }
    }
    this.termCheckBoxValidate = this.termCheckBoxValidate.bind(this);
    this.handleChosenFile = this.handleChosenFile.bind(this);
  }

  handleChosenFile(chosenFile){

    // this.props.loader(this.state.modeState);

    // console.log("#handleChosenFile: ",chosenFile);
    this.setState(()=>({
      file: chosenFile
    })
    );
  }
  termCheckBoxValidate(modeCheckBox){
    // console.log("termCheckBoxValidate:1", modeCheckBox)
    this.setState(()=>({
      checkBox: modeCheckBox
      })
    );
    // console.log("termCheckBoxValidate:2", this.state.checkBox)
  }
  handleDispplayLoader(displayLoader){
    this.props.loader(displayLoader);
  }
 
render() {
    //https://bootstrapious.com/p/bootstrap-sidebar
    return (
      <> 
        <div className="row justify-content-center">
          <h5>Convert your audio file to text </h5> 
          
        </div>
        <div className="container">
          <div className="row">
            <ChooseFile selectedFile={(e)=>this.handleChosenFile(e)}/> 

            <UploadFile displayLoader={(e)=>this.handleDispplayLoader(e)} 
                        chosenFile={{fileName: this.state.file, checkBox: this.state.checkBox}}/>

            <AgreeTermCheckBox termCheckBox={(e)=>this.termCheckBoxValidate(e)}/>
            
          </div>
        </div>
      </>
    );
  }
}

export default FileHandling;