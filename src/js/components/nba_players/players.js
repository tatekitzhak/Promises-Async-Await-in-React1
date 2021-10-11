import React, {useState}  from 'react';

const Player = ({name, id, number}) => {

  return(
        <>
          <div>
            <li>
              <h3> Player {number} name is: {name}</h3>
              <p> Player ID is: {id}</p>
            </li>
          </div>
        </>
  )};


export default Player;
