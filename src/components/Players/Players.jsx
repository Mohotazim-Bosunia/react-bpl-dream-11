import Player from "../Player/Player";
import { useEffect, useState } from "react";


const Players = () => {
  const [players,setPlayers]=useState([])

  useEffect( () => {
    fetch('players.json')
    .then ( res=> res.json())
    .then (data => setPlayers(data))
  },[])


    return (
      <div>
        <h1>Player:{players.length}</h1>
        <div className="grid grid-cols-3 gap-4">
           {
          players.map(player => <Player
          player={player}
          ></Player>)
         }
        </div>
      </div>
    );
};

export default Players;