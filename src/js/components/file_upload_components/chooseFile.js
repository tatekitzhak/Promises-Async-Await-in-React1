import React from "react";

class ChooseFile extends React.Component{
    constructor(props) {
      super(props);
      this.state = {file: ''};
      this.handleChooseAudioFile = this.handleChooseAudioFile.bind(this);
    }

    handleChooseAudioFile(e){

        console.log("file name: ", e.target.files[0].name);
         let file = e.target.files[0]
         console.log("handleChooseAudioFile:",file);
           /* https://www.codexworld.com/file-type-extension-validation-javascript/ */
         let allowedExtensionsTypes = /(\.|\/)(mp3|mp4|wav|wma)$/i; /*   /(\.jpg|\.jpeg|\.png|\.gif)$/i;    */
        
         if(allowedExtensionsTypes.test(file.type) || allowedExtensionsTypes.test(file.name)) 
         {
             console.log("file is valid");
             this.setState(()=>({
               file: file
             }),
             this.props.selectedFile(file)
             );
         }
         else{
           console.log("Sorry, " + file.name + " file is not allowed. Please upload file having extensions .mp3/ .mp4/ .wav/ .wma only. ");
          
         }
      }
    
    render(){
      return (
        <div className="col-md-4 pull-md-right">
            <label  className="form-label">Choose an audio file</label>
            <input type="file" name="file" className="form-control form-control-lg inputBtn" accept="audio/*, video/*" 
                                        onChange={(e)=>this.handleChooseAudioFile(e)} />  

            <p><a href="#">View transcript file formats are support</a></p>

        </div>
      );
    }
  }
  export default ChooseFile;
  