import React, {useContext} from 'react';
import Nav from './nav';
import AddPlayer from './addPlayer';
import PlayersList from './playersList';
import Team from './team';
import {NBAPlayerProvider} from './nbaPlayerContext';
import {PlayerContext} from './nbaPlayerContext';
//https://www.youtube.com/watch?v=35lXWvCuM8o&ab_channel=DevEd

function MainTask4() {
  return(
        <>
          <div>
            <NBAPlayerProvider>
                <Nav />
                <AddPlayer/>
                <PlayersList/>
                <Team/>
            </NBAPlayerProvider>
          </div>
        </>
  );}


export default MainTask4;
