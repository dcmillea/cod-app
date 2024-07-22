"use client";

import { useEffect, useState } from "react";
import { wonderWeaponRanker } from "../dataBase/database";
import WonderWeaponItem from "./WonderWeaponItem";

function WonderWeaponsContainer() {
  const [dataList, setDataList] = useState([]);
  const data = wonderWeaponRanker();

  useEffect(() => {
    const placeHolderArr: any = [];
    data.forEach((el: any) => {
      const total =
        el.power + el.ammo + el.accessibility + el.reliability + el.aesthetic;

      const item = {
        key: el.key,
        name: el.name,
        description: el.description,
        image: el.image,
        overall: total,
        power: el.power,
        ammo: el.ammo,
        innovation: el.innovation,
        accessibility: el.accessibility,
        reliability: el.reliability,
        aesthetic: el.aesthetic,
        infinteDamage: el.infinteDamage,
      };
      placeHolderArr.push(item);
    });

    placeHolderArr.sort((a: any, b: any) => b.overall - a.overall);
    placeHolderArr.forEach((item: any, index: number) => {
      item.rank = index + 1;
    });

    setDataList(placeHolderArr);
  }, []);

  return (
    <div className="flex flex-col space-y-20 max-w-screen-xl w-full mt-32 items-center">
      {dataList.map((el: any) => (
        <WonderWeaponItem
          key={el.key}
          name={el.name}
          description={el.description}
          image={el.image}
          overall={el.overall}
          rank={el.rank}
          power={el.power}
          innovation={el.innovation}
          ammo={el.ammo}
          accessibility={el.accessibility}
          reliability={el.reliability}
          aesthetic={el.aesthetic}
          infinteDamage={el.infinteDamage}
        />
      ))}
    </div>
  );
}

export default WonderWeaponsContainer;
