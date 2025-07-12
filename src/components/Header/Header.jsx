import banner from "../../assets/imgage/banner-main.png"


const Header = ({handleButtenCoin}) => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...></>
 m-4 py-8 space-y-3 rounded-t-xl">
               <img className="flex items-center mx-auto" src={banner} alt="" />
               <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
               <h1 className="text-2xl">Beyond Boundaries Beyond Limits</h1>
               <button onClick={handleButtenCoin} className= " hover:bg-purple-600 text-yellow-300 bg-black rounded-xl p-3">Claim Free Credit</button>
               </div>
        </div>
    );
};

export default Header;