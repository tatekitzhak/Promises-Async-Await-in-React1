import React ,{useState, createContext} from 'react';

export const PlayerContext = createContext();


export const NBAPlayerProvider =(props)=>{

  const [palyers, setPlayers] = useState([
    { name:"A",
      number:1,
      id: 12
    },
    {
      name:"B",
      number:2,
      id: 13
    },
    {
      name:"C",
      number:3,
      id: 14
    }
  ]);

  return(
      <PlayerContext.Provider value={[palyers, setPlayers]} >
      {props.children}
      </PlayerContext.Provider>

  );
};
