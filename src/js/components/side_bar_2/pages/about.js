import React from 'react';
import { useHistory, useParams } from 'react-router-dom'


function About(props) {
  const { id } = useParams()


  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>About {id}</h1>
              </div>
              <div className="list-group list-group-flush">
                {console.log("About:",props)}
              </div>
          </div>
      </div>
    </>
  );
};


export default About;
