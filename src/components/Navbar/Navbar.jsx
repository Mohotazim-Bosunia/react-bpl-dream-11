import logo from '../../assets/imgage/logo.png'

const Navbar = () => {
    return (
      <div class="flex items-center justify-between px-6 py-4 bg-white shadow">
  
  <div class="flex items-center space-x-2">
    <img src={logo} alt="Logo" class="h-10" />
    <span class="font-bold text-blue-700 text-xl">CRICZEN</span>
  </div>

  
  <div class="flex space-x-8 text-gray-600 text-sm font-medium">
    <a href="#" class="hover:text-black">Home</a>
    <a href="#" class="hover:text-black">Fixture</a>
    <a href="#" class="hover:text-black">Teams</a>
    <a href="#" class="hover:text-black">Schedules</a>
  </div>

  
  <div>
    <button class="flex items-center gap-1 px-4 py-2 bg-white border rounded-full text-sm font-semibold shadow-sm">
      <span class="text-black">0 Coin</span>
      <img src="coin-icon.png" alt="Coin" class="h-4 w-4" />
    </button>
  </div>
</div>

    );
};

export default Navbar;