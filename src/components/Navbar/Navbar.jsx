import { useState } from 'react';
import logo from '../../assets/imgage/logo.png'
import { BsCoin } from "react-icons/bs";
import Header from '../Header/Header';
const Navbar = () => {

  const[coin,setCoin]=useState(0)

  const handleButtenCoin = () =>{
    
    const newCoin = coin+30;
    setCoin(newCoin)
  }
  
  //console.log(coin)

  
    return (

      <div>
       

      <div className='flex items-center justify-between px-6 py-4 bg-white shadow'>
  
  <div className='flex items-center space-x-2'>
    <img src={logo} alt="Logo" className='h-10' />
    <span className='font-bold text-blue-700 text-xl'>CRICZEN</span>
  </div>

  
  <div className='flex space-x-8 text-gray-600 text-sm font-medium'>
    <a href="#" className='hover:text-black'>Home</a>
    <a href="#" className='hover:text-black'>Fixture</a>
    <a href="#" className='hover:text-black'>Teams</a>
    <a href="#" className='hover:text-black'>Schedules</a>
  </div>

  
  <div className=''>
    <h1 className='flex justify-between text-1xl font-semibold border border- rounded-lg p-3 gap-3'>Coin:{coin}<BsCoin className='mt-1 bg-yellow-400 rounded-full'></BsCoin></h1>
  </div>


  
</div>

<Header handleButtenCoin = {handleButtenCoin}></Header>
      </div>


    );
};

export default Navbar;