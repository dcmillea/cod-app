import Image from "next/image";
import wawZombies from "../../images/home/Waw_Zombies.jpg";
import originsStaves from "../../images/home/Screenshot 2024-07-21 at 7.46.08 AM.png";
import nineTiger from "../../images/home/IX_boss.jpg";
import moonZombs from "../../images/home/moon_zombs.webp";
import mulitplayer from "../../images/home/multiplayerCOD.jpg";
import ItemContainer from "./ItemContainer";

function FrontPageImages() {
  return (
    <div className="w-full grid grid-cols-5 grid-rows-8 mx-auto max-w-screen-xl min-h-screen">
      <div className="row-start-1 hover:z-30 z-10 group relative row-end-4 col-start-1 col-end-3">
        <Image
          className="absolute sectionHover"
          src={originsStaves}
          alt="wonderWeaponImg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <ItemContainer text="Wonder Weapons" pageUrl="/wonderWeapons" />
      </div>
      <div className="row-start-3 hover:z-30 z-20 group relative row-end-6 col-start-2 col-end-5">
        <Image
          className="absolute sectionHover rounded-xl"
          src={wawZombies}
          alt="wonderWeaponImg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <ItemContainer text="Zombie Maps" pageUrl="/zombieMaps" />
      </div>
      <div className="row-start-4 hover:z-30 z-10 group relative row-end-9 col-start-1 col-end-4">
        <Image
          className="absolute sectionHover rounded-xl"
          src={nineTiger}
          alt="wonderWeaponImg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <ItemContainer text="Bosses" pageUrl="bosses" />
      </div>
      <div className="row-start-1 relative hover:z-30 z-10 group row-end-5 col-start-3 col-end-6">
        <Image
          className="absolute sectionHover rounded-xl"
          src={moonZombs}
          alt="wonderWeaponImg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <ItemContainer text="Easter Eggs" pageUrl="easterEggs" />
      </div>
      <div className="row-start-5 relative hover:z-30 z-10 group row-end-9 col-start-4 col-end-6">
        <Image
          className="absolute sectionHover rounded-xl"
          src={mulitplayer}
          alt="wonderWeaponImg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <ItemContainer text="Specialists" pageUrl="specialists" />
      </div>
    </div>
  );
}

export default FrontPageImages;
