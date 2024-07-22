"use client";

import { useEffect, useState } from "react";
import { specialistRanker } from "../dataBase/database";
import SpecialistRankItem from "./SpecialistRankItem";

function WonderWeaponsContainer() {
  const [dataList, setDataList] = useState([]);
  const data = specialistRanker();

  useEffect(() => {
    const placeHolderArr: any = [];
    data.forEach((el: any) => {
      const total = el.ability + el.weapon + el.aesthetic + el.versatility;

      const item = {
        key: el.key,
        name: el.name,
        description: el.description,
        image: el.image,
        overall: total,
        ability: el.ability,
        weapon: el.weapon,
        abilityName: el.ability_name,
        weaponName: el.weapon_name,
        aesthetic: el.aesthetic,
        versatility: el.versatility,
        inBO4: el.inBO4,
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
        <SpecialistRankItem
          key={el.key}
          name={el.name}
          image={el.image}
          overall={el.overall}
          rank={el.rank}
          description={el.description}
          aesthetic={el.aesthetic}
          weapon={el.weapon}
          ability={el.ability}
          weaponName={el.weaponName}
          versatility={el.versatility}
          abilityName={el.abilityName}
          inBO4={el.inBO4}
        />
      ))}
    </div>
  );
}

export default WonderWeaponsContainer;
