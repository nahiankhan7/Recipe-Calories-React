import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Menu = ({ menu, addIntoWantToCook }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = menu;
  return (
    <div className="border border-gray-300 shadow-lg p-3 md:p-5 lg:p-7 rounded-lg w-full bg-white">
      <img
        src={recipe_image}
        alt=""
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        {recipe_name}
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">
        {short_description}
      </p>
      <span className="block text-sm md:text-base text-gray-800 mb-2">
        Ingredients: {ingredients.length}
      </span>

      <ul className="list-disc list-inside mb-4 text-gray-700">
        {ingredients.map((item, idx) => (
          <li key={idx} className="text-sm md:text-base">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <IoMdTime className="text-gray-500" />
          <p className="text-sm md:text-base">{preparing_time}</p>
        </div>

        <div className="flex items-center space-x-2">
          <FaFire className="text-gray-500" />
          <p className="text-sm md:text-base">{calories}</p>
        </div>
      </div>

      <button
        onClick={() => addIntoWantToCook(menu)}
        className="bg-green-500 hover:bg-green-600 transition duration-300 py-2 px-4 md:py-2.5 md:px-6 text-sm md:text-base font-medium text-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        Want to Cook
      </button>
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  addIntoWantToCook: PropTypes.func,
};
