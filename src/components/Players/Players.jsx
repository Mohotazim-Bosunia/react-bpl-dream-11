import Player from "../Player/Player";
import { useEffect, useState } from "react";


const Players = () => {
  const [players,setPlayers]=useState([])
  const [addplayer,setAddplayer]=useState([])
  

  useEffect( () => {
    fetch('players.json')
    .then ( res=> res.json())
    .then (data => setPlayers(data))
  },[])
 
  //console.log(players)

  const hundleAddPlayer = (player) => {
    const newAddplayer=[...addplayer,player]
     setAddplayer(newAddplayer)
     console.log(addplayer)
  }
   
    return (
      <div>
        
        <div className="flex justify-between">
          <h1 className="m-4 text-2xl font-bold">Available Players</h1>
          <div className="mr-7">
               <b className="border rounded-md p-3 hover:bg-sky-300">Available:</b>
               <b className="border rounded-md p-3 hover:bg-sky-300">Selected:{addplayer.length} </b>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
           {
          players.map(player => <Player
          player={player}
          hundleAddPlayer={hundleAddPlayer}
          ></Player>)
         }
        </div>
      </div>
    );
};

export default Players;