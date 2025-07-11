
const Player = ({player}) => {
    //console.log(player)
    const {image,name}=player;
    return (
        <div className=''>
            <img src={image} alt="" />
             <h1>{name}</h1>
        </div>
    );
};

export default Player;