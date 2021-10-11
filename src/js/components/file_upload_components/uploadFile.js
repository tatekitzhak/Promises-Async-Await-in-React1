// import React, { Component, Fragment } from "react";

// class UploadFile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//           file: '',
//           captureOutputResults: '',
//           chooseValidMassege:{
//             color:'#fff',
//             displayMode:'none', 
//             indicateMassege:''
//           },
//           modeState:{
//             loader:"none",
//             message: "Please upload file"
//           }
//         }
//   }
 
//   async handleUploadFile(e){
//       let fileName = this.state.file.name;

//     if(!fileName)
//     {
//       const chooseValidMassege = {color:'red', displayMode:'block',indicateMassege:'Please choose a valid audio file before upload'};

//       console.log("Please upload file: ",!this.state.file.name);
  
//           this.setState(()=>({
//             chooseValidMassege
//           }), ()=> {
//               console.log("chooseValidMassege: ",this.state)
//           });

//     } else if (fileName){
      
//         console.log("You must agree to the terms first:", this.checkboxValidation.current.checked);
     
//     } else{

//       //https://medium.com/swlh/how-to-display-a-preloader-dd6114349601
//       try {
      
//           console.log("Please wait for server response...");
//           this.props.loader("block");
          
//           let file = this.state.file;
//           let formData = new FormData();

//           formData.append("audioFile", file);
//           const configParams = {
//                                 method: "POST", 
//                                 credentials: 'same-origin',
//                                 body: formData
//                                 };
//           const url = 'http://localhost:3000/transcribe';

//           let response = await fetch(url, configParams);
//           let response_from_server = await response.json();

//           this.setState((state) => ({ 
//               captureOutputResults: response_from_server.stdout
//           }));

//           let dataResult = this.state.captureOutputResults;
            
//           if(dataResult !== '') {
//               console.log("Result from srver: ", this.state); 
//             }

//       } catch(error){
//           console.log("Error On Fetch: ",error)
//       } 
//     }
// }
 
// render() {
//     return (
//       <> 
//         <div className="container">           
//             <div className="col-md-4 pull-md-right">
//               <label  className="form-label">Upload file</label>
//               {/* <button type="button" className="btn btnColor form-control form-control-lg" onClick={(e)=>this.handleUploadFile(e)}>Convert</button> */}

//               <button type="button" id="collapseBtn" className="btn btn-primary form-control form-control-lg"  
//                        data-target="#collapseExample" 
//                       aria-expanded="false" aria-controls="collapseExample"
//                       onClick={(e)=>this.handleUploadFile(e)} >
//               Convert
//               </button>
//               <p style={ {  color: this.state.chooseValidMassege.color, display: this.state.chooseValidMassege.displayMode} } > Please choose a valid audio file before upload</p>
//             </div>
//         </div>
//       </>
//     );
//   }
// }

// export default UploadFile;
import React, { Component, Fragment } from "react";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        file:'',
        conditionsFileUpload: {
            fileName: '', 
            checkBox:''
        },
          captureOutputResults: '',
          chooseValidMassege:{
            color:'#fff',
            displayMode:'none', 
            indicateMassege:''
          },
          modeState:{
            loader:"none",
            massege: "Please upload file"
          }
        }
  }
 
  async handleUploadFile(e){
    this.props.displayLoader({ loaderDisply: 'block', converterTxt: 'server response'});

      let fileName = this.props.chosenFile.fileName;
      const conditionsFileUpload = this.props.chosenFile.fileName;
        this.setState(()=>({
            conditionsFileUpload: this.props.chosenFile.fileName
          }));

    if(!fileName)
    {
      const chooseValidMassege = {color:'red', displayMode:'block',indicateMassege:'Please choose a valid audio file before upload'};

      console.log("Please upload file: ",!this.state.conditionsFileUpload.fileName);
  
          this.setState(()=>({
            chooseValidMassege
          }), ()=> {
              console.log("chooseValidMassege: ",this.state.modeState.massege)
          });

    } else if (!this.props.chosenFile.checkBox){
      
        console.log("You must agree to the terms first::", fileName);
     
    } else{

      //https://medium.com/swlh/how-to-display-a-preloader-dd6114349601
      try {
      
          console.log("Please wait for server response...", fileName);
          this.props.displayLoader("block");
          let file = fileName;
          let formData = new FormData();

          formData.append("audioFile", file);
          const configParams = {
                                method: "POST", 
                                credentials: 'same-origin',
                                body: formData
                                };
          const url = 'http://localhost:3000/transcribe';

          let response = await fetch(url, configParams);
          let response_from_server = await response.json();

          this.setState((state) => ({ 
              captureOutputResults: response_from_server.stdout
          }));

          let dataResult = this.state.captureOutputResults;
            
          if(dataResult !== '') {
            this.props.displayLoader({ loaderDisply: 'none', converterTxt: ''});
              console.log("Result from srver: ", this.state); 
            }

      } catch(error){
          console.log("Error On Fetch: ",error)
      } 
    }
}
// componentDidUpdate(prevProps, prevState, snapshot){
//     console.log("componentDidUpdate",prevProps, this.props);

// }
 
render() {
    return (
      <> 
        <div className="col-md-4 pull-md-right">
            <label  className="form-label">Upload file</label>
            {/* <button type="button" className="btn btnColor form-control form-control-lg" onClick={(e)=>this.handleUploadFile(e)}>Convert</button> */}

            <button type="button" id="collapseBtn" className="btn btn-primary form-control form-control-lg"  
                    data-target="#collapseExample" 
                    aria-expanded="false" aria-controls="collapseExample"
                    onClick={(e)=>this.handleUploadFile(e)} >
            Convert
            </button>
            <p style={ {  color: this.state.chooseValidMassege.color, display: this.state.chooseValidMassege.displayMode} } > Please choose a valid audio file before upload</p>
        </div>
      </>
    );
  }
}

export default UploadFile;