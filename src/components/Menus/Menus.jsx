import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

const Menus = ({ addIntoWantToCook }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .catch((error) => console.error("Error fetching the menu:", error));
  }, []);

  return (
    <div className="col-span-1 md:col-span-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menus.map((menu) => (
          <Menu
            key={menu.recipe_id}
            menu={menu}
            addIntoWantToCook={addIntoWantToCook}></Menu>
        ))}
      </div>
    </div>
  );
};

export default Menus;
