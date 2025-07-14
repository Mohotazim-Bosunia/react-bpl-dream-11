import { FcBusinessman } from "react-icons/fc";


const Player = ({player,handlePlayers}) => {
    //console.log(player)
    const {image,name,country,role,battingType,bowlingType,biddingPrice}=player;
    return (
       <div>
            
         <div className='border p-5 rounded-xl'>
            <img className="rounded-xl" src={image} alt="" />
             <h1 className="flex m-2 text-2xl font-bold"><FcBusinessman></FcBusinessman>{name}</h1>
             <div className="flex justify-between">
                <h1 className="mt-3">{country}</h1>
                <h1 className="hover:bg-green-400 border rounded-xl p-2 bg-slate-400">{role}</h1>
                
             </div>

            <hr />

            <div>
                <h1 className="2xl font-semibold">Rating</h1>
                <div className=" font-semibold flex justify-between ">
                    <h1>{battingType}</h1>
                    <h1>{bowlingType}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-semibold">Price:{biddingPrice}</h1>
                    <button onClick={() => handlePlayers(player)}  className="hover:bg-sky-500  border border-gray-950 rounded-md p-2">Choose Player</button>
                </div>
            </div>
        </div>
       </div>
    
    );
};

export default Player;