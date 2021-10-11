import React from 'react';

function SpinnerLoader(props){
         const newDisplayMode = props.spinnerLoaderMode;
         let displayMode = 'none';

         if(!newDisplayMode)
            displayMode = 'none';
        else
            displayMode = newDisplayMode;

         const color ='#05A2EA';
        console.log("SpinnerLoader1: ", displayMode);
        console.log("SpinnerLoader2: ",Object.values(displayMode)[0]);
         return(
            <>
            <div style={ {  display: displayMode} } className="d-flex justify-content-center">
                <div style={ { color: color, display: displayMode} } className=" mb-3 justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            </div> 
            </>
            );
         }
export default SpinnerLoader;
