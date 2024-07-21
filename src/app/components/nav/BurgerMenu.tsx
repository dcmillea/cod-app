"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function BurgerMenu() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [menuList, setMenuList] = useState([
    "About",
    "WaW",
    "B01",
    "B02",
    "BO3",
    "BO4",
  ]);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div onClick={handleClick} className="md:hidden cursor-pointer flex px-4">
      <RxHamburgerMenu className="navBarItem w-7 h-7" />

      {showDropDown && (
        <div className="absolute px-4 h-48 w-24 top-20 right-5">
          <ul className="list-none flex h-full w-full justify-between flex-col">
            {menuList.map((el: string) => (
              <li className="navBarItem text-lg" key={el}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
