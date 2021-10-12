import React, {useState, useContext, useEffect}  from 'react';
import Player from './players';
import {PlayerContext} from './nbaPlayerContext';

const PlayersList = () => {
      const [palyers, setPlayers] = useContext(PlayerContext);
      const [post, setPost] = useState("");

      // useEffect(() => {
      //     fetch("https://www.balldontlie.io/api/v1/players")
      //       .then((response) => response.json())
      //       .then((json) => {
      //         setPost(json);
      //
      //       })
      //       .catch((err) => {
      //         setStatus("Error");
      //       });
      //   },[]);
  return(
        <>
          <div>
          <h3>{console.log("useEffect:" ,palyers)}</h3>
            <ul>
          {
            palyers.map((player, index)=>(

              <Player name={player.name} id={player.id}  number={player.number}  key={index}/>
            ))
          }
            </ul>
          </div>
        </>
  )};


export default PlayersList;
