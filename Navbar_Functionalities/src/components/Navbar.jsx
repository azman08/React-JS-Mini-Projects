import { useEffect, useState } from "react";
import logo from "../assets/N.png";
import { X, Menu } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 770);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between w-full h-[76px] bg-gray-200">
      {/* left */}
      <div className="flex items-center p-6 gap-4 cursor-pointer">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-xl font-bold ">NAVBAR</h1>
      </div>
      {/* right */}
      <div className="flex items-center gap-8">
        <ul className="hidden lg:flex items-center p-6 gap-6 2xl:gap-10 font-bold text-base cursor-pointer md:flex md:p-4">
          <li>Home</li>
          <li>Career</li>
          <li>Services</li>
          <li>Help</li>
        </ul>
        {/* ham */}
        <div className="flex items-center gap-4">
          {isSmallScreen && (
            <button className="items-center bg-black text-white px-4 py-2 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black">
              Login
            </button>
          )}

          <button onClick={handleToggle} className=" mr-4 lg:hidden md:hidden ">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute h-full top-[76px] left-0 w-full bg-gray-500  flex justify-center items-center lg:hidden md:hidden">
              <ul className="flex flex-col items-center p-6 gap-14 font-bold text-base ">
                <li className="cursor-pointer hover:text-blue-500">Home</li>
                <li className="cursor-pointer hover:text-blue-500">Career</li>
                <li className="cursor-pointer hover:text-blue-500">Services</li>
                <li className="cursor-pointer hover:text-blue-500">Help</li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center gap-6 font-medium text-base mr-4 ">
          <button className="bg-black text-white px-4 py-2 rounded-full hover:border-black hover:border-2 hover:bg-white hover:text-black">
            Login
          </button>
          <button className="bg-white border-black border-2 px-4 py-2 rounded-full hover:border-white hover:border-2 hover:bg-black hover:text-white">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
