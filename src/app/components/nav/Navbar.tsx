import Image from "next/image";
import Link from "next/link";
import treyarchLogo from "../../images/nav/Treyarch_logo_2.webp";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  return (
    <header className="h-[64px] transform mt-8 rounded -translate-x-1/2 fixed top-0 w-full left-[50%] z-50 flex items-center justify-center transition-all duration-500 max-w-screen-xl">
      <nav className="w-full h-full flex items-center justify-between bg-[#33333399] px-4">
        <Link
          href="/"
          className="ml-3 cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
        >
          <Image
            src={treyarchLogo}
            alt="treyarchLogo"
            width={125}
            height={50}
          />
        </Link>

        <ul className="md:flex items-center hidden space-x-5">
          <Link href="/about" className="navBarItem">
            About
          </Link>
          <li className="font-extralight cursor-default">|</li>
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

        <BurgerMenu />
      </nav>
    </header>
  );
}

export default Navbar;

//
{
  /* <nav > */
}
