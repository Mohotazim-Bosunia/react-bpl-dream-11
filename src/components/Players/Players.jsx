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

  const handlePlayers = player =>{
    
    const isExised = addplayer.find(items => items.playerId === player.playerId)
    if(!isExised){
      setAddplayer([...addplayer,player])
    }
    else{
      alert('Already Exist')
    }

    
    //console.log(addplayer)
  }
   
    return (
      <div>
        
        <div className="flex justify-between">
          
          <div>
            <h1 className="m-4 text-2xl font-bold">Available Players</h1>
            <div>
              {
                addplayer.map(item => 
                  <div className="">
                    <div>

                    </div>
                    <div>
                      <h1 className="font-bold text-2xl">{item.name}</h1>
                      <p>{item.role}</p>
                    </div>
                    
                  </div>
                )
              }
            </div>
        
          </div>
          <div className="mr-7">
              <button  className="border rounded-md p-3 hover:bg-sky-300">Available</button>
              <button  className="border rounded-md p-3 hover:bg-sky-300" >Selected:{addplayer.length}</button>
          </div>
        </div>
        <div id="hide-container" className="grid grid-cols-3 gap-4">
           {
          players.map(player => <Player
            key={player.playerId}
            player={player}
            handlePlayers={handlePlayers}
          ></Player>)
         }
        </div>
      </div>
    );
};

export default Players;