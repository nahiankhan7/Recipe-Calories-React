import { useState } from "react";
import "./App.css";

import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Menus from "./components/Menus/Menus";
import Tables from "./components/Tables/Tables";

function App() {
  const [wantToCookItems, setWantToCookItems] = useState([]);
  const [currentlyCookingItems, setCurrentlyCookingItems] = useState([]);

  const addIntoWantToCook = (item) => {
    const alreadyItem = wantToCookItems.find(
      (wantToCookItem) => wantToCookItem.recipe_id === item.recipe_id
    );

    if (alreadyItem) {
      alert("Already Exists");
    } else {
      setWantToCookItems([...wantToCookItems, item]);
    }
  };

  const addIntoCurrentlyCooking = (item) => {
    const keepItems = wantToCookItems.filter(
      (wantToCookItem) => wantToCookItem.recipe_id !== item.recipe_id
    );
    setWantToCookItems(keepItems);
    //only insertion
    setCurrentlyCookingItems([...currentlyCookingItems, item]);
  };

  return (
    <div className="container mx-auto">
      <Header></Header>

      <div className="px-4 md:px-0">
        <Banner></Banner>

        <div className="text-center mt-12">
          <h1 className="text-3xl font-semibold mb-3">Our Recipes</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            magnam
            <br></br>
            amet sunt cumque! Numquam accusamus corrupti exercitationem optio
            eligendi qui!
          </p>
        </div>

        <div className="mt-12 pb-12 grid grid-cols-1 md:grid-cols-12 gap-4">
          <Menus addIntoWantToCook={addIntoWantToCook}></Menus>
          <Tables
            wantToCookItems={wantToCookItems}
            addIntoCurrentlyCooking={addIntoCurrentlyCooking}
            currentlyCookingItems={currentlyCookingItems}></Tables>
        </div>
      </div>
    </div>
  );
}

export default App;
