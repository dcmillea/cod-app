"use client";

import Link from "next/link";
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
            <Link href="/about" className="navBarItem">
              About
            </Link>
            <Link href="/gamePage/worldAtWar" className="navBarItem">
              WaW
            </Link>
            <Link href="/gamePage/blackOps1" className="navBarItem">
              BO1
            </Link>
            <Link href="/gamePage/blackOps2" className="navBarItem">
              BO2
            </Link>
            <Link href="/gamePage/blackOps3" className="navBarItem">
              BO3
            </Link>
            <Link href="/gamePage/blackOps4" className="navBarItem">
              BO4
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
