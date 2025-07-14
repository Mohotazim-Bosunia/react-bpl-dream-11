import Player from "../Player/Player";
import { useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { handleAvailable, handleMoreAddbtn, handleSelectBtn } from "../Utilities/Display";

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
   const handleDelete= id =>{
      const newAddPlayer =addplayer.filter(y => y.playerId !=id)
      setAddplayer(newAddPlayer)
    }
   
    return (
      <div>
        
        <div className="flex justify-between">
          
          <div>
            <h1 id="remove-available" className="m-4 text-2xl font-bold">Available Players</h1>
            <h1 id="add-selectplayer" className="hidden m-4 text-2xl font-bold">Your Selected Players</h1>
            <div id="select-container" className="hidden">
              {
                addplayer.map(item => 
               <div className="border rounded-xl flex justify-between gap-x-96 mb-5 ml-10">
                   <div className="flex gap-4">
                    <div>
                      <img className="w-20 h-20 rounded-full" src={item.image} alt="" />
                    </div>
                    <div className="mt-3">
                      <h1 className="font-bold text-2xl">{item.name}</h1>
                      <p>{item.role}</p>
                    </div>
                    
                  </div>
                  <button onClick={() =>handleDelete(item.playerId)} className="text-green-500 text-4xl"><MdDeleteSweep></MdDeleteSweep></button>
               </div>
                )
              }
            </div>


             <button id="moreAddBtn-container" onClick={handleMoreAddbtn} className="hidden border p-3 bg-green-500 rounded-lg ml-10 hover:bg-sky-400">Add More Players</button>


          </div>
          <div className="mr-7">
              <button onClick={handleAvailable} className="border rounded-md p-3 hover:bg-sky-300">Available</button>
              <button onClick={handleSelectBtn}  className="border rounded-md p-3 hover:bg-sky-300" >Selected:{addplayer.length}</button>
          </div>
        </div>
        <div id="available-container" className="grid grid-cols-3 gap-4">
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