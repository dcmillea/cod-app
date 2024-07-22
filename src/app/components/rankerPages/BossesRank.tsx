"use client";

import Image from "next/image";
import { bossRanker } from "../dataBase/database";
import { useEffect, useState } from "react";
import BossRank from "./BossRank";

function BossesRank() {
  const data = bossRanker();
  const [dataList, setDataList] = useState([]);

  console.log(data);
  useEffect(() => {
    const placeHolderArr: any = [];
    data.forEach((el: any) => {
      const item = {
        name: el.name,
        type: el.boss_type,
        image: el.image,
        description: el.description,
        innovation: el.innovation,
        mapFit: el.map_fit,
        reward: el.reward,
        key: el.key,
      };
      placeHolderArr.push(item);
    });

    setDataList(placeHolderArr);
  }, []);

  return (
    <div className="flex flex-col space-y-20 max-w-screen-xl w-full mt-32 items-center">
      {/* {dataList.map((el: any) => (
        <BossRank name=/>
      ))} */}
    </div>
  );
}

export default BossesRank;
