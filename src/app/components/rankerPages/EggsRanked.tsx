"use client";
import { useEffect, useState } from "react";
import { eggRanker } from "../dataBase/database";
import EggItem from "./EggItem";

function EggsRanked() {
  const [dataList, setDataList] = useState([]);

  const data = eggRanker();
  console.log(data);

  useEffect(() => {
    let placeHolderArr: any = [];

    data.forEach((el: any) => {
      let total;

      total =
        el.gameplay_integration +
        el.innovation +
        el.narrative +
        el.payoff +
        el.replayability;

      const item = {
        key: el.key,
        canSolo: el.canSolo,
        description: el.description,
        image: el.image,
        name: el.name,
        gameplay_integration: el.gameplay_integration,
        innovation: el.innovation,
        narrative: el.narrative,
        payoff: el.payoff,
        replayAbility: el.replayability,
        overall: total,
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
        <EggItem
          key={el.key}
          canSolo={el.canSolo}
          description={el.description}
          image={el.image}
          name={el.name}
          gameplay_integration={el.gameplay_integration}
          innovation={el.innovation}
          narrative={el.narrative}
          payoff={el.payoff}
          replayAbility={el.replayAbility}
          rank={el.rank}
          overall={el.overall}
        />
      ))}
    </div>
  );
}

export default EggsRanked;
