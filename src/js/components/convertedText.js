import React, { Component, Fragment } from "react";
import audioProcessing from "../../assets/images/audioProcessing.gif" ;

class ConvertedText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ConvertedText:", this.props.converterTxt);
    return (
      <>
      <div className="container border">
        <div className="row">
          {/* <div className="collapse" id="collapseExample"> */}
              <div className="card card-body">
                <div className="col-md pull-md-right ">
                    <div className="outputText">
                      <h5>Text result:</h5>
                      <p >ting out the bits we've already worked on in previous guides: </p>
                        <ul>
                          <li>Speech to Text Online</li>
                          <li>Voice to text </li>
                          <li>Convert audio and video to text</li>
                          <li>Transcription service simple and easy to convert speech into text</li>
                          <li>Upload an audio or video file for transcription, and receive fast of free text output service</li>
                          <li>This converter feature allows you to simply, easily, free and online convert from a variety of audio sources to text </li>
                          <li>All you have to do is upload audio file and converter feature will convert to text</li>
                        </ul>
                    </div>
                </div>
              </div>
          {/* </div> */}
        </div> 
      </div>
      </>
    );
  }
}

export default ConvertedText;