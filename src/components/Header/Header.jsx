import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row gap-y-4 items-center justify-between mt-8 p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Recipe Calories
      </h1>

      <nav className="flex items-center space-x-6 font-medium text-center md:text-left">
        <a
          href="#"
          className="hover:text-green-500 transition-colors duration-200">
          Home
        </a>
        <a
          href="#"
          className="hover:text-green-500 transition-colors duration-200">
          Recipes
        </a>
        <a
          href="#"
          className="hover:text-green-500 transition-colors duration-200">
          About
        </a>
        <a
          href="#"
          className="hover:text-green-500 transition-colors duration-200">
          Search
        </a>
      </nav>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <div className="relative flex items-center">
          <CiSearch className="w-5 h-5 absolute ml-3 text-gray-600" />
          <input
            placeholder="Search"
            type="text"
            className="bg-gray-200 rounded-full py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
          />
        </div>

        <div className="bg-green-400 p-2 rounded-full shadow">
          <FaRegUserCircle className="text-2xl text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
