import { IoIosCart } from "react-icons/io";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white ">
      <div>
        <h1 className="text-xl font-bold">Cart</h1>
      </div>
      <div>
        <span>
          <IoIosCart className="cursor-pointer" size={30} /> {cartCount}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
