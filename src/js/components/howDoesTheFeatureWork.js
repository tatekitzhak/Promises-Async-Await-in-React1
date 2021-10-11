import React from 'react';

function HowDoesTheFeatureWork(props){
         
         return(
            <>
            {/* https://www.knime.com/nodeguide/data-access/audio-files 
              * https://css-tricks.com/custom-list-number-styling/
            */}
            <div className="row justify-content-center">
<div className="featureWork ">
                    <h2 className="text-uppercase font-weight-bold">How Does The Feature Converter Audio to text Work </h2>
                    <p><span >This workflow shows the functionality of the Convert Audio to text</span></p>
                  
                    <ol>
                      <li>Read in audio files</li>
                      
                      <li>Use speech-to-text services</li>
                      <li>Extract acoustic features </li>
                    
                      <li>Visualize in interactive table</li>
                    
                      <li>No file upload limits</li>
                     
                      <li>List item</li>
                      <li>List item</li>
                        
                       
                    
                    </ol>

                 
                    <p><span >Ideally, in the end, we get a platform, gradually overgrown with properties.</span></p>

                </div>
            </div>
                
            </>
            );
         }
export default HowDoesTheFeatureWork;
