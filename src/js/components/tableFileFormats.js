import React from 'react';
import {useHistory} from "react-router-dom";

function TableFileFormats(props){
    // const history = useHistory();
    //   console.log("history TableFileFormats: ", history);
    console.log("TableFileFormats",props.tableFileFormats);
    /* https://go-transcribe.com/convert-audio-to-text */
        return(
            <>
                <div className="container table-responsive py-5"> 
                    <div className="fileTable">
                        <h4 className="text-white justify-content-center"> Transcribe's audio to text converter supports a number of popular audio & video formats. </h4>
                    </div>
                    <table className="table table-bordered table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">FORMAT</th>
                                <th scope="col">FILE TYPE</th>
                                <th scope="col">FILE OUTPUT</th>
                                <th scope="col">COST/ Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> MP3</td>
                                <td>Audio</td>
                                <td>Convert MP3 files to text</td>
                                <td>Free plan</td>
                            </tr>
                            <tr>
                                <td>MP4</td>
                                <td>Audio</td>
                                <td>Convert MP4 files to text</td>
                                <td>Free plan</td>
                            </tr>
                            <tr>
                                <td>WMA</td>
                                <td>Audio</td>
                                <td>Convert WMA files to text</td>
                                <td>Free plan</td>
                            </tr>
                            <tr>
                                <td>WAV</td>
                                <td> Audio</td>
                                <td>Convert WAV files to text</td>
                                <td>Free plan</td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Free plan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
            );
         }
export default TableFileFormats;



