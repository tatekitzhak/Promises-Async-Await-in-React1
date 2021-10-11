import React, { useState } from 'react';
import FileHandling from './fileHandling';
import SpinnerLoader from './spinnerLoader';
import ConvertedText from './convertedText';
import TableFileFormats from './tableFileFormats';
import WorkflowShow from './workflowShow';
import HowDoesTheFeatureWork from './howDoesTheFeatureWork';


function Home(props){
    const [loaderMode, setStateMode] = useState({ loaderDisply: 'none', converterTxt: ''});

     function updateField(value){
        setStateMode({
          ...loaderMode,
          loaderMode: value
        });
      };
     
    
    return(
        <>
            <FileHandling loader={(value)=>updateField(value)}/>


            <ConvertedText converterTxt={loaderMode.loaderMode}/> 
          
        </>
    );
}
export default Home;
